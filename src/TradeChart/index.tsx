import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { ChartView } from "./ChartView";
import { ChartHeader } from "./ChartComponents/ChartHeader";
import { ChartLegendLastCandleInformation } from "./ChartComponents/ChartLegends/ChartLegendLastCandleInformation";

import { coinbaseListener } from "./utils/listeners/coinbaseListener";
import { kucoinListener } from "./utils/listeners/kucoinListener";
import { binanceListener } from "./utils/listeners/binanceListener";

import { fetcher } from "./utils/fetchers";
import { candleStickFormatter } from "./utils/formatters";
import { darkTheme } from "./themes/chartTheme";
import { ChartSettings, MarketInfo, TimeInterval, UserFill, UserOrder } from "./types";

const ChartContainer = styled.div`
display: flex;
flex-direction: column;

flex: 1;

background: #131722;
`;

type IProps = {
  error: null | string | Error,
  children: React.ReactNode | null
}

interface IState {
  error?: null | string | Error
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
  marketInfo: MarketInfo,
  userOrders: Array<UserOrder>,
  userFills: Array<UserFill>,

  pair: string, exchange: string,
  interval: string, setInterval: Function,
  intervals: Array<TimeInterval>

  settings: ChartSettings, updateSetting: Function
}

export const TradeChart = (props: ChartProps) => {
  const [error, setError] = useState<any>(null);
  
  const chartLayout = darkTheme.chartLayout;
  const settings = props.settings;
  const updateSetting = props.updateSetting;

  //chart color
  const background = settings.background.color;
  chartLayout.layout.backgroundColor = `rgba(${background.r},${background.g},${background.b},${background.a})`;

  //data
  const [candleData, setData] = useState<any>(undefined);
  const [updateData, setUpdateData] = useState<any>(undefined);

  //legend 1
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
    const transformedData = await fetcher(props.pair, props.interval, props.exchange, (value: any) => {
      console.error("error: ", value);
      setError(value);
    });
    const formattedData = candleStickFormatter(transformedData, props.exchange);
    const priorCandle = formattedData[formattedData.length - 2];
    const lastCandle = formattedData[formattedData.length - 1];
    
    setData(formattedData);

    setUpdateData(lastCandle); 
    setLegendCandle(lastCandle)
    setPriorLegendCandle(priorCandle);
  }, [props.pair, props.interval]);

  //fetch candle data using websockets and add it to the data. 
  useEffect(() => {
    const pair = props.pair;
    const interval = props.interval;
    const exchange = props.exchange;
    var ws: any, listener: any, dependencies: any;
    if(error) return;

    var formattedInterval;

    switch(exchange.toLowerCase()){
      case "coinbase":
        var _p;
        if(pair.length === 8) _p = pair.match(/.{1,4}/g);
        if(pair.length === 7) _p = pair.match(/.{1,4}/g);
        if(pair.length === 6) _p = pair.match(/.{1,3}/g);

        //pair not found
        if(!_p) return; 

        var formattedPair = _p[0] + "-" + _p[1];

        ws = new WebSocket(`wss://ws-feed.exchange.coinbase.com`);
        dependencies = {productIds: [formattedPair], interval, exchange};
        listener = coinbaseListener;
        break;
      case "coinex":
        break;
      case "ftx":
        break;
      case "kucoin":
        ws = new WebSocket(`wss://ws-feed.exchange.coinbase.com`);
        listener = kucoinListener;
        break;
      case "binance":
      default:
        formattedInterval = interval;
        ws = new WebSocket(`wss://stream.binance.com/ws/${pair.toLowerCase()}@kline_${formattedInterval}`);
        dependencies = {};
        listener = binanceListener;
    }

    //no valid websocket found.
    if(!ws) return;

    ws.onerror = (e: any) => {
      setError(e);
    };

    try{
      //start listener
      listener(ws, (candle: any) => {
        //update candlestick data
        if(error || !candleData) return;
        setUpdateData(candle);
        
        //update legends correspondedly
        legends.items.forEach((legend) => {
          legend.fnc({time: undefined});
        });
      }, dependencies);
    } catch(e) {
      setError(e);
    }

    return () => {
      ws.close();
    }

  }, [props.pair, props.interval]);

  useEffect(() => {
    fetchCandleData()
    .catch((e) => {
      setError(e);
    });


  }, [fetchCandleData, props.interval ])

  if(error) return <ChartContainer>{ typeof error === "string" ? error : 'An error occured'}</ChartContainer>;

  return (
    <ChartContainer>
      <ErrorBoundary error={error}>
        <ChartHeader
          marketInfo={props.marketInfo}
          interval={props.interval} 
          intervals={props.intervals}
          setInterval={(i: string)  => {
            setInterval(i);
          }}

          settings={settings} updateSetting={updateSetting}
        />
        <ChartView
          initialChartData={candleData}
          updateData={updateData}

          orders={props.userOrders} userFills={props.userFills}
          marketAlias={props.marketInfo.alias}

          legends={legends}
          chartLayout={chartLayout}
          candleStickConfig={{

            priceFormat: {
              type: 'price',
              precision: props.marketInfo.pricePrecisionDecimal,
              minMove: 0.001,
            }
          }}
          histogramConfig={{
            priceLineVisible: false,
            lastValueVisible: false,
            overlay: true,
            
            scaleMargins: {
              top: 0.85,
              bottom: 0,
            },
          }}
          chartSetting={props.settings}
        />
      </ErrorBoundary>
    </ChartContainer>
  );
};