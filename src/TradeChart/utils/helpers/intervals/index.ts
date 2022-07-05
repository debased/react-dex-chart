import ftxIntervals from './ftx';
import binanceIntervals from './binance';
import coinbaseIntervals from './coinbase';
import coinexIntervals from './coinex';

const getIntervals = (exchange: string) => {
    let intervals: Array<any> = [];
    switch (exchange.toLowerCase()) {
        case "ftx":
            intervals = ftxIntervals;
            break;
        case "coinbase":
            intervals = coinbaseIntervals;
            break;
        case "coinex":
            intervals = coinexIntervals;
            break;
        case "binance":
        default:
            intervals = binanceIntervals;
            break;
    }
    return intervals;
}

export default getIntervals;