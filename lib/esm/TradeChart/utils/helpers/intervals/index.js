import ftxIntervals from './ftx';
import binanceIntervals from './binance';
import coinbaseIntervals from './coinbase';
import coinexIntervals from './coinex';
var getIntervals = function (exchange) {
    var intervals = [];
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
};
export default getIntervals;
