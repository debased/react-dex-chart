//coinbase candle adaptor
export var candleAdaptor = function (currCandle) {
    var time = currCandle[0], low = currCandle[1], high = currCandle[2], open = currCandle[3], close = currCandle[4], volume = currCandle[5];
    var candle = {
        time: time,
        open: open,
        high: high,
        low: low,
        close: close,
        value: volume,
    };
    return candle;
};
//coinbase socket adaptor
export var socketAdaptor = function (data, resolution //interval in seconds
) {
    if (resolution === void 0) { resolution = 60; }
    var time = data.time, price = data.price, size = data.size;
    var roundedTime = Math.floor(new Date(time).getTime() / 60000) * resolution;
    price = parseFloat(price);
    size = parseFloat(size);
    // we parse the prices at 
    // a later point where we have access to candle history
    var candle = {
        time: roundedTime,
        open: price,
        high: price,
        low: price,
        close: price,
        value: size,
    };
    return candle;
};
