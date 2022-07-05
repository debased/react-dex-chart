import { candleAdaptor } from '../adaptors/coinbaseAdaptor';
export var coinbaseFormatter = function (transformedData) {
    if (!Array.isArray(transformedData)) {
        if (typeof transformedData === "object") {
            if (transformedData.message === "NotFound") {
                console.error("binance: pair not found");
                throw new Error("Invalid Symbol");
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
    //reverse data
    var formattedData = accus.reverse();
    return formattedData;
};
