import { binanceFormatter } from "./binanceFormatter";
import { coinbaseFormatter } from "./coinbaseFormatter";
import { coinexFormatter } from "./coinexFormatter";
import { ftxFormatter } from "./ftxFormatter";

//formatters
export const candleStickFormatter = (transformedData: any, exchange: string) => {
    var formattedData: Array<any> = [];

    switch(exchange.toLowerCase()){
        case 'coinbase':
            formattedData = coinbaseFormatter(transformedData);
            break;
        case 'coinex':
            formattedData = coinexFormatter(transformedData);
            break;
        case 'ftx':
            formattedData = ftxFormatter(transformedData);
            return transformedData;
        case 'binance':
        default:
            formattedData = binanceFormatter(transformedData);
            break;
    }
    return formattedData;

}