import { candleAdaptor } from '../adaptors/coinexAdaptor';
export var coinexFormatter = function (transformedData) {
    if (!Array.isArray(transformedData)) {
        if (typeof transformedData === "object") {
            if (transformedData.code === 2) {
                console.error("coinex: pair not found");
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
    return accus;
};
