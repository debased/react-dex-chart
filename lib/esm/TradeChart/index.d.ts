/// <reference types="react" />
import { ChartSettings, MarketInfo, TimeInterval, UserFill, UserOrder } from "./types";
interface ChartProps {
    marketInfo: MarketInfo;
    userOrders: Array<UserOrder>;
    userFills: Array<UserFill>;
    pair: string;
    exchange: string;
    interval: string;
    setInterval: Function;
    intervals: Array<TimeInterval>;
    settings: ChartSettings;
    updateSetting: Function;
}
export declare const TradeChart: (props: ChartProps) => JSX.Element;
export {};
