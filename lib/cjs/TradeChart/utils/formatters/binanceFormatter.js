"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binanceFormatter = void 0;
var binanceAdaptor_1 = require("../adaptors/binanceAdaptor");
var binanceFormatter = function (transformedData) {
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
        var candle = (0, binanceAdaptor_1.candleAdaptor)(curr);
        accus.push(candle);
        return accu;
    }, []);
    return accus;
};
exports.binanceFormatter = binanceFormatter;
