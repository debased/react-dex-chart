import { socketAdaptor } from "../adaptors/kucoinAdaptor";

// /market/candles:{symbol}_{type}
export const kucoinListener = async (_: any, fnc: any) => {

    //we need a public token first from kucoin
    const response = await fetch('https://api.kucoin.com/api/v1/bullet-public', {method: 'POST'});
    const data = await response.json();

    const endpoint = data.instanceServers[0].endpoint;
    const token = data.token;
    if(!token) return;

    //needs to ping endpoint to keep connection alive
    var ws = new WebSocket(`${endpoint}?token=${token}`)
    ws.onopen = () => {}
    ws.onmessage = (e) => {
        const msg = JSON.parse(e.data);
        if(msg.type === "message"){
        
            const rawCandles = msg.data.candles;
        
            //add candles
            rawCandles.forEach((rawCandle: any) => {
                let candle = socketAdaptor(rawCandle);
                fnc(candle);
            });
        }

        
    }
};
