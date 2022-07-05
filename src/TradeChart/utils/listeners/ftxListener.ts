import { ftxSocketAdaptor } from "../adaptors";

export const ftxListener = (ws: WebSocket, fnc: any) => {
    ws.onopen = () => {}
    ws.onmessage = (e) => {
        const transformedData = JSON.parse(e.data);
        const candle = ftxSocketAdaptor(transformedData);
        //add candle
        fnc(candle);
    }
};