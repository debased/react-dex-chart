"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coinbaseFormatter = void 0;
var coinbaseAdaptor_1 = require("../adaptors/coinbaseAdaptor");
var coinbaseFormatter = function (transformedData) {
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
        var candle = (0, coinbaseAdaptor_1.candleAdaptor)(curr);
        accus.push(candle);
        return accu;
    }, []);
    //reverse data
    var formattedData = accus.reverse();
    return formattedData;
};
exports.coinbaseFormatter = coinbaseFormatter;
