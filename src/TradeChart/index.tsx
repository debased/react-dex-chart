import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ChartView } from "./ChartView";
import { ChartHeader } from "./ChartComponents/ChartHeader";
import { ChartLegendLastCandleInformation } from "./ChartComponents/ChartLegends/ChartLegendLastCandleInformation";

import { ChartLayout } from "./themes/chartTheme";
import { ChartSettings, MarketInfo, TimeInterval, UserFill, UserOrder } from "./types";
import { CandlestickData, CandlestickSeriesOptions, HistogramSeriesOptions } from "lightweight-charts";

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
  candleData: Array<CandlestickData>;
  updateData: Array<CandlestickData>;
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

export const TradeChart = (props: ChartProps) => {
  //legend OHLC
  const [selectedLegendCandle, setLegendCandle] = useState<{open: number, high: number, low: number, close: number} | undefined>(undefined);
  const [priorLegendCandle, setPriorLegendCandle] = useState<{open?: number, high?: number, low?: number, close?: number} | undefined>(undefined);

  const candleData = props.candleData;
  const updateData = props.updateData;
  const chartLayout = props.chartLayout;
  const settings = props.settings;
  const updateSetting = props.updateSetting;
  const marketInfo = props.marketInfo;

  const background = settings.background.color;
  chartLayout.layout.backgroundColor = background ? `rgba(${background.r},${background.g},${background.b},${background.a})` : chartLayout.layout.backgroundColor;

  //data
  const pair = marketInfo.baseAsset.symbol + "-" + marketInfo.quoteAsset.symbol;

  const legends = {
    items: [],
  };

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
