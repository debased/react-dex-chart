import { binanceSocketAdaptor } from "../adaptors";
export var binanceListener = function (ws, fnc) {
    ws.onopen = function () { };
    ws.onmessage = function (e) {
        var transformedData = JSON.parse(e.data);
        var candle = binanceSocketAdaptor(transformedData);
        //add candle
        fnc(candle);
    };
};
