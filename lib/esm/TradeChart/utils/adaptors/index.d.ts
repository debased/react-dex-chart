export declare const binanceAdaptor: (data: any[]) => {
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
    value: number;
    color: undefined;
};
export declare const binanceSocketAdaptor: (data: any) => {
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
    value: number;
    color: undefined;
};
export declare const coinbaseAdaptor: (currCandle: any[]) => {
    time: any;
    open: any;
    high: any;
    low: any;
    close: any;
    value: any;
};
export declare const coinbaseSocketAdaptor: (data: any, resolution?: number) => {
    time: any;
    open: any;
    high: any;
    low: any;
    close: any;
    value: any;
};
export declare const ftxAdaptor: (data: any) => {
    time: number;
    open: any;
    high: any;
    low: any;
    close: any;
    value: any;
    color: undefined;
};
export declare const ftxSocketAdaptor: (data: any) => {
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
    value: number;
    color: undefined;
};
export declare const coinexAdaptor: (currCandle: any[]) => {
    time: any;
    open: number;
    high: number;
    low: number;
    close: number;
    value: number;
};
