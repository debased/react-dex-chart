"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ftxFormatter = void 0;
var ftxAdaptor_1 = require("../adaptors/ftxAdaptor");
var ftxFormatter = function (transformedData) {
    var accus = [];
    transformedData.reduce(function (accu, curr) {
        var candle = (0, ftxAdaptor_1.candleAdaptor)(curr);
        accus.push(candle);
        return accu;
    }, 0);
    return accus;
};
exports.ftxFormatter = ftxFormatter;
