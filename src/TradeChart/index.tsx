import React, { useCallback, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ChartView } from "./ChartView";
import { ChartHeader } from "./ChartComponents/ChartHeader";
import { ChartLegendLastCandleInformation } from "./ChartComponents/ChartLegends/ChartLegendLastCandleInformation";

import { coinbaseListener } from "./utils/listeners/coinbaseListener";
import { binanceListener } from "./utils/listeners/binanceListener";

import { fetcher } from "./utils/fetchers";
import { candleStickFormatter } from "./utils/formatters";
import { ChartLayout } from "./themes/chartTheme";
import { ChartSettings, MarketInfo, TimeInterval, UserFill, UserOrder } from "./types";
import { CandlestickSeriesOptions, HistogramSeriesOptions } from "lightweight-charts";

const ChartContainer = styled.div`
display: flex;
flex-direction: column;

flex: 1;
background: ${({theme}) => theme.layout.backgroundColor};
`;

type IProps = {
  error?: null | undefined | string | Error
  children: React.ReactNode | null
}

interface IState {
  error?: null | undefined | string | Error
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props);
    this.state = {
      error: undefined,
    }
  }

  static getDerivedStateFromError(error: Error){
    return {
      error: error
    };
  }
  componentDidCatch(error: Error){
    this.setState({
      error: error
    });
  }

  render(){

    return (
      <>
        { this.state.error ? (
          <>
            {typeof this.state.error === "string" ? `${this.state.error}` : 'An error occured'}
          </>
        ) : (
          <>
            {this.props.children}
          </>
        )}
      </>

    )
  }
}


interface ChartProps {
  marketInfo: MarketInfo;
  
  userOrders: Array<UserOrder>;
  userFills: Array<UserFill>;
  
  interval: string;
  setInterval(value: string): void;
  intervals: Array<TimeInterval>;
  
  candleStickConfig: Partial<CandlestickSeriesOptions>,
  histogramConfig: Partial<HistogramSeriesOptions>,
  chartLayout: ChartLayout;
  
  settings: ChartSettings;
  updateSetting(payload: {section: string, type: string, value: string}): void;
  reset(section: string): void;
}

export const TradeChart: React.FunctionComponent<ChartProps> = (props: ChartProps) => {
  const chartLayout = props.chartLayout;
  const settings = props.settings;
  const updateSetting = props.updateSetting;
  const marketInfo = props.marketInfo;

  const background = settings.background.color;
  chartLayout.layout.backgroundColor = background ? `rgba(${background.r},${background.g},${background.b},${background.a})` : chartLayout.layout.backgroundColor;

  //data
  const pair = marketInfo.baseAsset.symbol + "-" + marketInfo.quoteAsset.symbol;
  const [candleData, setData] = useState<Array<any>>([]);
  const [updateData, setUpdateData] = useState<Array<any>>([]);

  //legend OHLC
  const [selectedLegendCandle, setLegendCandle] = useState<any>(undefined);
  const [priorLegendCandle, setPriorLegendCandle] = useState<any>(undefined);

  const legends = {
    items: [  {
      name: 'Last Candle Information (OHLC)',
      type: "crosshair",
      fnc: (param: any) => {
        //console.log(param);
        //nothing in current row
        if(param.time === undefined){
          setLegendCandle(undefined);
          const priorCandle = candleData[candleData.length-1];
      
          setLegendCandle(updateData)
          setPriorLegendCandle(priorCandle);
          return;
        }

        //current selected candle
        const candle = candleData.filter((c: any) => c.time === param.time)[0];
        if(!candle) return;
        const currentCandle = candleData.indexOf(candle); //current candle index
        const previousCandle = candleData[currentCandle - 1]; //candle before current

        setLegendCandle(candleData[currentCandle])
        setPriorLegendCandle(previousCandle);
      },
      component: <ChartLegendLastCandleInformation
        candleBefore={priorLegendCandle}
        {...selectedLegendCandle} 
      />,
    }],
  };

  //fetch and set candle data once pair or interval changes
  const fetchCandleData = useCallback(async () => {
    setData([]);
    const transformedData = await fetcher(pair, props.interval, props.marketInfo.exchange, (value: any) => {
      console.error("error: ", value);
    });
    const formattedData = candleStickFormatter(transformedData, props.marketInfo.exchange);
    const priorCandle = formattedData[formattedData.length - 2];
    const lastCandle = formattedData[formattedData.length - 1];
    
    setData(formattedData);

    setUpdateData(lastCandle); 
    setLegendCandle(lastCandle)
    setPriorLegendCandle(priorCandle);
  }, [pair, props.interval]);

  //fetch candle data using websockets and add it to the data. 
  useEffect(() => {
    const interval = props.interval;
    const exchange = props.marketInfo.exchange;
    var ws: any, listener: any, dependencies: any;

    var formattedInterval;

    switch(exchange.toLowerCase()){
      case "coinbase":
        var formattedPair = pair;

        ws = new WebSocket(`wss://ws-feed.exchange.coinbase.com`);
        dependencies = {productIds: [formattedPair], interval, exchange};
        listener = coinbaseListener;
        break;
      case "coinex":
        break;
      case "ftx":
        break;
      case "kucoin":
        break;
      case "binance":
      default:
        formattedInterval = interval;
        formattedPair = pair.split('-')[0] + pair.split('-')[1];
        ws = new WebSocket(`wss://stream.binance.com/ws/${formattedPair.toLowerCase()}@kline_${formattedInterval}`);
        dependencies = {};
        listener = binanceListener;
    }

    //no valid websocket found.
    if(!ws) return;

    ws.onerror = (e: any) => {
      console.error(e);
    };

    try{
      //start listener
      listener(ws, (candle: any) => {
        //update candlestick data
        if(!candleData) return;
        setUpdateData(candle);
        
        //update legends correspondedly
        legends.items.forEach((legend) => {
          legend.fnc({time: undefined});
        });
      }, dependencies);
    } catch(e) {
      console.error(e);
    }

    return () => {
      ws.close();
    }

  }, [pair, props.interval]);

  useEffect(() => {
    fetchCandleData()
    .catch((e) => {
      console.error(e);
    });


  }, [fetchCandleData, props.interval ])

  return (
    <ThemeProvider theme={chartLayout}>
      <ChartContainer>
        <ErrorBoundary>
          <ChartHeader
            marketInfo={props.marketInfo}
            interval={props.interval} 
            intervals={props.intervals}
            setInterval={props.setInterval}

            settings={settings} updateSetting={updateSetting}
            reset={props.reset}
          />
          <ChartView
            initialChartData={candleData}
            updateData={updateData}

            orders={props.userOrders} 
            userFills={props.userFills}
            marketAlias={pair}

            legends={legends}
            chartLayout={chartLayout}
            candleStickConfig={props.candleStickConfig}
            histogramConfig={props.histogramConfig}
            chartSetting={props.settings}
          />
        </ErrorBoundary>
      </ChartContainer>
    </ThemeProvider>
  );
};
