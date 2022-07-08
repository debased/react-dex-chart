import React, { useRef, useEffect, useCallback, useState } from 'react';

import styled from "styled-components";
import { createChart, LineStyle } from 'lightweight-charts';
import ChartLoaderSpinner from './ChartComponents/ChartLoaderSpinner';
import { ChartSettings, UserFill, UserOrder } from './types';
import { ChartLayout } from './themes/chartTheme';

const ContainerStyle = styled.div`
  height: 400px;
  width: 100%:
  max-width: 30vw;

  @media only screen and (max-width: 990px) {
    min-width: 100vw;
    max-height: 250px;
  }
  @media only screen and (max-width: 1200px) {
    max-width: 500px;
  }
`;

const LegendContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  z-index: 4;
  margin: 8px;
`;

interface IProps {
  initialChartData: Array<any>,
  updateData: Array<any> | null,

  candleStickConfig: any,
  histogramConfig: any,
  chartLayout: ChartLayout,
  chartSetting: ChartSettings,

  marketAlias: string | undefined | null,
  orders: Array<UserOrder>,
  userFills: Array<UserFill>,

  legends: {
    items: Array<any>
  }
}

export const ChartView = ({
  initialChartData,
  updateData,
  candleStickConfig,
  histogramConfig,
  chartSetting,
  chartLayout,
  

  orders=[],
  userFills=[],
  marketAlias=undefined,

  legends = { items: [] }
}: IProps) => {

  const resizeObserver = useRef<any>();
  const chartContainerRef = useRef<any>();
  const chart = useRef<any>();
  const candleSeries = useRef<any>();
  const volumeSeries = useRef<any>();
  const [priceLines, setPriceLines] = useState<Array<any>>([]);
  const [_, setMarkers] = useState<Array<any>>([]);

  const setInitialData = useCallback(() => {
    candleSeries.current = chart.current.addCandlestickSeries(candleStickConfig);
    volumeSeries.current = chart.current.addHistogramSeries(histogramConfig);

    //legends
    legends.items.forEach((legend) => {
      if(!legend.fnc) return;

      switch (legend.type) {
        case "crosshair":
          chart.current.subscribeCrosshairMove(legend.fnc);
          break;
        default:
          break;
      }
    });    

    candleSeries?.current?.setData(initialChartData);
    volumeSeries?.current?.setData(initialChartData);

    setOrderData();
    setMarkerData();
  }, [initialChartData]);


  //set order price lines
  const setMarkerData = () => {
    candleSeries?.current?.setMarkers([]);
    if(!chartSetting.trade.showExecutions) return;

    const createMarkers = (ms: Array<any>) => {
      let formatted: Array<any> = [];
      for (var key in ms){

        const fill: UserFill = ms[key];

        //break;
        var marker = { 
          time: fill.time, 
          position: fill.side === "b" ? 'belowBar' : 'aboveBar',
          color:  fill.side === "b" ? '#26A69A' : 'red',
          shape:  fill.side === "b" ? 'arrowUp' : 'arrowDown',
          text:  fill.side === "b" ? 'buy' : 'sell',
        };       
        if(fill.market === marketAlias) formatted.push(marker);
      }
      return formatted;
    }
    
    let formattedMarkers = createMarkers(userFills);
    candleSeries?.current?.setMarkers(formattedMarkers);
    setMarkers(formattedMarkers);
    
  };
  //set order price lines
  const setOrderData = () => {
    priceLines.forEach((priceLine) => {
      candleSeries?.current?.removePriceLine(priceLine);
      let temp = priceLines.filter((line) => line !== priceLine);
      setPriceLines(temp);
    })
    if(!chartSetting.trade.showOrders) return;

    const createOrders = (os: Array<any>) => {
      let formatted: Array<UserOrder> = [];
      for (var key in os){
        const o = os[key];  
        const order: UserOrder = o;
        //has to be current market, not included and open status
        if(order.market === marketAlias && !formatted.includes(order) && order.status === "o"){
          formatted.push(order);
        }
      }
      return formatted;
    }
    
    let formattedOrders = createOrders(orders);

    formattedOrders.forEach((order: UserOrder) => {
      const priceLine =candleSeries?.current?.createPriceLine({
        price: order.price,
        color: order.side === "s" ? '#d11736' : '#176bd1',
        lineWidth: 1,
        lineStyle: LineStyle.Solid,
        axisLabelVisible: true,
        title: `${order.side === "s" ? "sell" : "buy"} order ${order.size}`,
      });
      let temp = priceLines;
      temp.push(priceLine);
      setPriceLines(temp);
    });
  };

  useEffect(() => {
    if(!chart.current) return;
    setOrderData();
  }, [orders, chart, chartSetting]);

  useEffect(() => {
    if(!chart.current) return;
    setMarkerData();
  }, [userFills, chart, chartSetting]);

  //candle data
  useEffect(() => {
      candleSeries?.current?.update(updateData);
      volumeSeries?.current?.update(updateData);
  }, [updateData]);

  //initialize chart
  useEffect(() => {
    if(!chartContainerRef.current) return;
    chartContainerRef.current.innerHTML = "";
    
    chart.current = createChart(chartContainerRef.current, {
      layout: { 
        ...chartLayout.layout,
      },
      grid: chartLayout.grid,
      timeScale: {
        timeVisible: true,
        secondsVisible: true,
        minBarSpacing: 1,
        rightOffset: 10,
      },
      rightPriceScale: {

      },
      crosshair: {
        mode: 0,
      },
    });
    setInitialData();
    return () => chart.current.remove();
  }, [setInitialData]);

  //update background settings
  useEffect(() => {

    if(!chart.current) return;
    const color = chartSetting.background.color;
    const background = color ? `rgba(${color.r},${color.g},${color.b},${color.a}` : chartLayout.layout.backgroundColor;

    chart.current.applyOptions({
      ...chartLayout,
      layout: {
        ...chartLayout.layout,
        backgroundColor: background,
      }
    });
  }, [chartLayout, chartSetting.background.color]);

  // Resize chart on container resizes.
  useEffect(() => {
    if(!chartContainerRef.current) return;

    resizeObserver.current = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      chart.current.applyOptions({
        width: width,
        height: height,
      });
    });

    resizeObserver.current.observe(chartContainerRef.current);

    return () => resizeObserver.current.disconnect();
  }, []);


  if(!initialChartData) return <ChartLoaderSpinner text={"Loading data"}/>;

  //setup legends
  const legendList = legends.items.map((legend, key) => <div key={key}>{legend.component}</div>);

  return (
    <ContainerStyle>
      <LegendContainer>{legendList}</LegendContainer>
      <div ref={chartContainerRef} style={{
        width: '100%',
        height: '100%'
      }}/>
    </ContainerStyle>
  );
};