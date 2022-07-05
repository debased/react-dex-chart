"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketAdaptor = exports.candleAdaptor = void 0;
//kucoin candle adaptor
var candleAdaptor = function (data) {
    if (data.length !== 7)
        throw new Error("invalid candle received");
    var time = data[0], open = data[1], close = data[2], high = data[3], low = data[4], volume = data[5];
    return {
        time: parseFloat(time) / 1000,
        open: parseFloat(open),
        high: parseFloat(high),
        low: parseFloat(low),
        close: parseFloat(close),
        value: parseFloat(volume),
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
