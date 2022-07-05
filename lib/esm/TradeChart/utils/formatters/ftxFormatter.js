import { candleAdaptor } from '../adaptors/ftxAdaptor';
export var ftxFormatter = function (transformedData) {
    var accus = [];
    transformedData.reduce(function (accu, curr) {
        var candle = candleAdaptor(curr);
        accus.push(candle);
        return accu;
    }, 0);
    return accus;
};
