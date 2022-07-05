//binance candle adaptor
export var candleAdaptor = function (data) {
    if (data.length !== 12)
        throw new Error("invalid candle received");
    var openTime = data[0], open = data[1], high = data[2], low = data[3], close = data[4], volume = data[5];
    return {
        time: openTime / 1000,
        open: parseFloat(open),
        high: parseFloat(high),
        low: parseFloat(low),
        close: parseFloat(close),
        value: parseFloat(volume),
        color: undefined,
        // closeTime,
        // quoteAssetVolume,
        // numberOfTrades,
        // takerBuyBaseAssetVolume,
        // takerBuyQuotessetVolume,
        // ignore,
    };
};
//binance socket candle adaptor
export var socketAdaptor = function (data) {
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
