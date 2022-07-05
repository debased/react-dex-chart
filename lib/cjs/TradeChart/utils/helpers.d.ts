export declare const useHandleClickOutside: (ref: any, fnc: any) => void;
export declare const formatCoinbaseInterval: (interval: string) => 60 | 300 | 900 | 3600 | 86400 | 604800;
export declare const formatCoinexInterval: (interval: string) => "1min" | "5min" | "15min" | "30min" | "1hour" | "4hour" | "1day" | "1week";
export declare const getCoinbaseProduct: (pair: string) => Promise<any>;
