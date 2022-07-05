import { binanceSocketAdaptor } from "../adaptors";

export const binanceListener = (ws: WebSocket, fnc: Function) => {
    ws.onopen = () => {}
    ws.onmessage = (e) => {
        const transformedData = JSON.parse(e.data);
        const candle = binanceSocketAdaptor(transformedData);
        //add candle
        fnc(candle);
    }
};
