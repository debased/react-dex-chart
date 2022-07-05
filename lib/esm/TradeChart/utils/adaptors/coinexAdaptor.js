//coinex candle adaptor
export var candleAdaptor = function (currCandle) {
    var time = currCandle[0], open = currCandle[1], close = currCandle[2], high = currCandle[3], low = currCandle[4], volume = currCandle[5];
    var candle = {
        time: time,
        open: parseFloat(open),
        high: parseFloat(high),
        low: parseFloat(low),
        close: parseFloat(close),
        value: parseFloat(volume),
    };
    return candle;
};
