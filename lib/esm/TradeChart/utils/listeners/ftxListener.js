import { ftxSocketAdaptor } from "../adaptors";
export var ftxListener = function (ws, fnc) {
    ws.onopen = function () { };
    ws.onmessage = function (e) {
        var transformedData = JSON.parse(e.data);
        var candle = ftxSocketAdaptor(transformedData);
        //add candle
        fnc(candle);
    };
};
