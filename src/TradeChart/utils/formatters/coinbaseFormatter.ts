import { candleAdaptor } from '../adaptors/coinbaseAdaptor';

export const coinbaseFormatter = (transformedData: any) => {
    if(!Array.isArray(transformedData)) {
        if(typeof transformedData === "object"){
            if(transformedData.message === "NotFound"){
                console.error("binance: pair not found");
                throw new Error("Invalid Symbol");
            }
        }

        throw new Error("Data received was not typeof Array");
    }

    let accus: Array<any> = [];
    transformedData.reduce((accu, curr) => {
        const candle = candleAdaptor(curr);
        accus.push(candle);
        return accu;
    }, []);

    //reverse data
    const formattedData = accus.reverse();

    return formattedData;
}