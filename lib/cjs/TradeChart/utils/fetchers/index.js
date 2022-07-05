"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetcher = void 0;
var helpers_1 = require("../helpers");
var binanceFetcher_1 = require("./binanceFetcher");
var coinbaseFetcher_1 = require("./coinbaseFetcher");
var coinexFetcher_1 = require("./coinexFetcher");
var ftxFetcher_1 = require("./ftxFetcher");
var kucoinFetcher_1 = require("./kucoinFetcher");
//fetchers, do any pair manipulating inside of here
var fetcher = function (pair, interval, exchange, setError) { return __awaiter(void 0, void 0, void 0, function () {
    var fnc, formattedPair, formattedInterval, _p, transformedData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                switch (exchange.toLowerCase()) {
                    case "coinbase":
                        if (pair.length === 8)
                            _p = pair.match(/.{1,4}/g);
                        if (pair.length === 7)
                            _p = pair.match(/.{1,4}/g);
                        if (pair.length === 6)
                            _p = pair.match(/.{1,3}/g);
                        console.log("pair", _p);
                        //pair not found
                        if (!_p)
                            return [2 /*return*/];
                        formattedPair = _p[0] + "-" + _p[1];
                        formattedInterval = (0, helpers_1.formatCoinbaseInterval)(interval);
                        fnc = coinbaseFetcher_1.coinbaseFetcher;
                        break;
                    case "coinex":
                        formattedPair = pair;
                        formattedInterval = (0, helpers_1.formatCoinexInterval)(interval);
                        fnc = coinexFetcher_1.coinexFetcher;
                        break;
                    case "ftx":
                        // https://ftx.com/api/markets/btc/usd/candles?resolution=3600
                        //has to be split
                        if (pair.length === 8)
                            _p = pair.match(/.{1,4}/g);
                        if (pair.length === 6)
                            _p = pair.match(/.{1,3}/g);
                        formattedPair = _p[0] + "/" + _p[1];
                        formattedInterval = (0, helpers_1.formatCoinbaseInterval)(interval);
                        fnc = ftxFetcher_1.ftxFetcher;
                        break;
                    case "kucoin":
                        if (pair.length === 8)
                            _p = pair.match(/.{1,4}/g);
                        if (pair.length === 6)
                            _p = pair.match(/.{1,3}/g);
                        formattedPair = _p[0] + "/" + _p[1];
                        formattedInterval = (0, helpers_1.formatCoinexInterval)(interval);
                        fnc = kucoinFetcher_1.kucoinFetcher;
                        break;
                    case "binance":
                    default:
                        formattedPair = pair.toUpperCase();
                        formattedInterval = interval;
                        fnc = binanceFetcher_1.binanceFetcher;
                        break;
                }
                return [4 /*yield*/, fnc(formattedPair, formattedInterval, setError)];
            case 1:
                transformedData = _a.sent();
                return [2 /*return*/, transformedData];
        }
    });
}); };
exports.fetcher = fetcher;
