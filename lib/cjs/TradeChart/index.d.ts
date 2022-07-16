import React from "react";
import { ChartLayout } from "./themes/chartTheme";
import { ChartSettings, MarketInfo, TimeInterval, UserFill, UserOrder } from "./types";
import { CandlestickSeriesOptions, HistogramSeriesOptions } from "lightweight-charts";
interface ChartProps {
    marketInfo: MarketInfo;
    userOrders: Array<UserOrder>;
    userFills: Array<UserFill>;
    interval: string;
    setInterval(value: string): void;
    intervals: Array<TimeInterval>;
    candleStickConfig: Partial<CandlestickSeriesOptions>;
    histogramConfig: Partial<HistogramSeriesOptions>;
    chartLayout: ChartLayout;
    settings: ChartSettings;
    updateSetting(payload: {
        section: string;
        type: string;
        value: string;
    }): void;
    reset(section: string): void;
}
export declare const TradeChart: React.FunctionComponent<ChartProps>;
export {};
