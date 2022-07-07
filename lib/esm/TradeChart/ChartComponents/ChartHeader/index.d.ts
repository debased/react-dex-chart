/// <reference types="react" />
import { ChartSettings, MarketInfo, TimeInterval } from "../../types.js";
export declare const ChartHeaderItem: import("styled-components").StyledComponent<"div", any, {
    ref?: any;
}, never>;
interface IProps {
    marketInfo: MarketInfo;
    interval: string;
    setInterval: Function;
    intervals: Array<TimeInterval>;
    settings: ChartSettings;
    updateSetting: Function;
    reset: Function;
}
export declare const ChartHeader: ({ marketInfo, interval, intervals, setInterval, settings, updateSetting, reset }: IProps) => JSX.Element;
export {};
