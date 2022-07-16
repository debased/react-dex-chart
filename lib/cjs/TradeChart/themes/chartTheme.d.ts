interface Layout {
    backgroundColor: string;
    lineColor: string;
    textColor: string;
    watermarkColor: string;
}
export interface ChartLayout {
    layout: Layout;
    grid: {
        vertLines: {
            color: string;
        };
        horzLines: {
            color: string;
        };
    };
}
export interface Theme {
    name: string;
    chartLayout: ChartLayout;
    candleStickConfig: {};
    histogramConfig: {};
}
export declare const darkTheme: Theme;
export declare const lightTheme: Theme;
export {};
