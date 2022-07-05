interface Theme {
    chartLayout: {
        layout: {
            backgroundColor: string;
            lineColor: string;
            textColor: string;
        };
        grid: {
            vertLines: {
                color: string;
            };
            horzLines: {
                color: string;
            };
        };
    };
    candleStickConfig: {};
    histogramConfig: {};
}
export declare const darkTheme: Theme;
export declare const lightTheme: Theme;
export {};
