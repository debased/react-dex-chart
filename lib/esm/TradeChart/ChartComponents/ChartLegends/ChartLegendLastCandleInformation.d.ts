import React from "react";
interface IProps {
    open: number | null | undefined;
    high: number | null | undefined;
    low: number | null | undefined;
    close: number | null | undefined;
    candleBefore: any;
}
export declare const ChartLegendLastCandleInformation: ({ open, high, low, close, candleBefore }: IProps) => React.JSX.Element;
export {};
