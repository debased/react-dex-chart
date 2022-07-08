import { formatCoinbaseInterval, formatCoinexInterval } from "../helpers";
import {binanceFetcher} from "./binanceFetcher";
import {coinbaseFetcher} from "./coinbaseFetcher";
import { coinexFetcher } from "./coinexFetcher";
import { ftxFetcher } from "./ftxFetcher";
import { kucoinFetcher } from "./kucoinFetcher";

//fetchers, do any pair manipulating inside of here
export const fetcher = async (pair: string, interval: string, exchange: string, setError: Function) => {
    var fnc, formattedPair, formattedInterval: any;
    var _p: any;

    switch(exchange.toLowerCase()){
        case "coinbase":
            formattedPair = pair.toUpperCase();
            formattedInterval = formatCoinbaseInterval(interval);
            fnc = coinbaseFetcher;
            break;
        case "coinex":
            formattedPair = pair;
            formattedInterval = formatCoinexInterval(interval);
            fnc = coinexFetcher;
            break;
        case "ftx":
            // https://ftx.com/api/markets/btc/usd/candles?resolution=3600
            //has to be split
            _p = pair.split('-');
            formattedPair = _p[0] + "/" + _p[1];
            formattedInterval = formatCoinbaseInterval(interval);
            fnc = ftxFetcher;
            break;
        case "kucoin":
            _p = pair.split('-');
            formattedPair = _p[0] + "/" + _p[1];
            formattedInterval = formatCoinexInterval(interval);
            fnc = kucoinFetcher;
            break;
        case "binance":
        default:
            _p = pair.split('-');
            formattedPair = _p[0] + _p[1];
            formattedInterval = interval;
            fnc = binanceFetcher;
            break;
    }
    //request data
    var transformedData = await fnc(formattedPair, formattedInterval, setError);
    
    return transformedData;
}