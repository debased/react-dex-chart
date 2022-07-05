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
            if(pair.length === 8) _p = pair.match(/.{1,4}/g);
            if(pair.length === 7) _p = pair.match(/.{1,4}/g);
            if(pair.length === 6) _p = pair.match(/.{1,3}/g);
    
            console.log("pair", _p);
            //pair not found
            if(!_p) return; 

            formattedPair = _p[0] + "-" + _p[1];
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
            if(pair.length === 8) _p = pair.match(/.{1,4}/g);
            if(pair.length === 6) _p = pair.match(/.{1,3}/g);
            
            formattedPair = _p[0] + "/" + _p[1];
            formattedInterval = formatCoinbaseInterval(interval);
            fnc = ftxFetcher;
            break;
        case "kucoin":
            if(pair.length === 8) _p = pair.match(/.{1,4}/g);
            if(pair.length === 6) _p = pair.match(/.{1,3}/g);
            
            formattedPair = _p[0] + "/" + _p[1];
            formattedInterval = formatCoinexInterval(interval);
            fnc = kucoinFetcher;
            break;
        case "binance":
        default:
            formattedPair = pair.toUpperCase();
            formattedInterval = interval;
            fnc = binanceFetcher;
            break;
    }
    //request data
    var transformedData = await fnc(formattedPair, formattedInterval, setError);
    
    return transformedData;
}