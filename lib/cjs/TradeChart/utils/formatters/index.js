"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.candleStickFormatter = void 0;
var binanceFormatter_1 = require("./binanceFormatter");
var coinbaseFormatter_1 = require("./coinbaseFormatter");
var coinexFormatter_1 = require("./coinexFormatter");
var ftxFormatter_1 = require("./ftxFormatter");
//formatters
var candleStickFormatter = function (transformedData, exchange) {
    var formattedData = [];
    switch (exchange.toLowerCase()) {
        case 'coinbase':
            formattedData = (0, coinbaseFormatter_1.coinbaseFormatter)(transformedData);
            break;
        case 'coinex':
            formattedData = (0, coinexFormatter_1.coinexFormatter)(transformedData);
            break;
        case 'ftx':
            formattedData = (0, ftxFormatter_1.ftxFormatter)(transformedData);
            return transformedData;
        case 'binance':
        default:
            formattedData = (0, binanceFormatter_1.binanceFormatter)(transformedData);
            break;
    }
    return formattedData;
};
exports.candleStickFormatter = candleStickFormatter;
