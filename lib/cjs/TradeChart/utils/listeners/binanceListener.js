"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binanceListener = void 0;
var adaptors_1 = require("../adaptors");
var binanceListener = function (ws, fnc) {
    ws.onopen = function () { };
    ws.onmessage = function (e) {
        var transformedData = JSON.parse(e.data);
        var candle = (0, adaptors_1.binanceSocketAdaptor)(transformedData);
        //add candle
        fnc(candle);
    };
};
exports.binanceListener = binanceListener;
