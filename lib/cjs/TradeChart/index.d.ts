import React from "react";
import { ChartLayout } from "./themes/chartTheme";
import { ChartSettings, MarketInfo, TimeInterval, UserFill, UserOrder } from "./types";
interface ChartProps {
    marketInfo: MarketInfo;
    userOrders: Array<UserOrder>;
    userFills: Array<UserFill>;
    interval: string;
    setInterval(value: string): void;
    intervals: Array<TimeInterval>;
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
