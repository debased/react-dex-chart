"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coinexFormatter = void 0;
var coinexAdaptor_1 = require("../adaptors/coinexAdaptor");
var coinexFormatter = function (transformedData) {
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
        var candle = (0, coinexAdaptor_1.candleAdaptor)(curr);
        accus.push(candle);
        return accu;
    }, []);
    return accus;
};
exports.coinexFormatter = coinexFormatter;
