import { candleAdaptor } from '../adaptors/binanceAdaptor';
export var binanceFormatter = function (transformedData) {
    if (!Array.isArray(transformedData)) {
        if (typeof transformedData === "object") {
            if (transformedData.code === -1121) {
                throw new Error("Invalid symbol");
            }
        }
        throw new Error("Data received was not typeof Array");
    }
    var accus = [];
    transformedData.reduce(function (accu, curr) {
        var candle = candleAdaptor(curr);
        accus.push(candle);
        return accu;
    }, []);
    return accus;
};
