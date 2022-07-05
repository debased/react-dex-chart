"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketAdaptor = exports.candleAdaptor = void 0;
//FTX candle adaptor
var candleAdaptor = function (data) {
    var time = data.time, open = data.open, high = data.high, low = data.low, close = data.close, volume = data.volume;
    return {
        time: time / 1000,
        open: open,
        high: high,
        low: low,
        close: close,
        value: volume,
        color: undefined,
    };
};
exports.candleAdaptor = candleAdaptor;
//binance socket candle adaptor
var socketAdaptor = function (data) {
    var candle = data.k;
    var time, open, high, low, close, volume;
    time = candle.t;
    open = candle.o;
    high = candle.h;
    low = candle.l;
    close = candle.c;
    volume = candle.v;
    return {
        time: time / 1000,
        open: parseFloat(open),
        high: parseFloat(high),
        low: parseFloat(low),
        close: parseFloat(close),
        value: parseFloat(volume),
        color: undefined,
    };
};
exports.socketAdaptor = socketAdaptor;
