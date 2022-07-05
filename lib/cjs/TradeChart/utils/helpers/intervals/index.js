"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ftx_1 = __importDefault(require("./ftx"));
var binance_1 = __importDefault(require("./binance"));
var coinbase_1 = __importDefault(require("./coinbase"));
var coinex_1 = __importDefault(require("./coinex"));
var getIntervals = function (exchange) {
    var intervals = [];
    switch (exchange.toLowerCase()) {
        case "ftx":
            intervals = ftx_1.default;
            break;
        case "coinbase":
            intervals = coinbase_1.default;
            break;
        case "coinex":
            intervals = coinex_1.default;
            break;
        case "binance":
        default:
            intervals = binance_1.default;
            break;
    }
    return intervals;
};
exports.default = getIntervals;
