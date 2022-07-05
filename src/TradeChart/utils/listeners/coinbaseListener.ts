import { coinbaseSocketAdaptor } from "../adaptors";
//import { getCoinbaseProduct } from "../helpers";

export const coinbaseListener = (
    ws: any,             //websocket instance
    fnc: any,            //callback
    dependencies: any=[] //dependencies [product_ids: ['BTC-USD']]
) => {
    //var lastUsed;

    ws.onopen = () => {
        //subscribe to market
        const subscribeMsg = JSON.stringify({
            type: 'subscribe',
            product_ids: dependencies.productIds,
            channels: ['matches'],
        });
        ws.send(subscribeMsg);
    }
    ws.onmessage = async (e: any) => {
        
        const transformedData = JSON.parse(e.data);
        //console.log("WS msg", transformedData);

        if(!transformedData.price) return;
        if(!transformedData.size) return;
        
        //let productId = transformedData.product_id;
        let candle = coinbaseSocketAdaptor(transformedData);
        
        //set candle OHLC correctly
        //const product = await getCoinbaseProduct(dependencies.productIds[0]);
        //candle.high = product.high;
        //candle.open = product.open;
        //console.log("product:", product, candle);
        
        //add candle
        fnc(candle);
    }
};
