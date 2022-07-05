import { candleAdaptor } from '../adaptors/coinexAdaptor';

export const coinexFormatter = (transformedData: any) => {
    if(!Array.isArray(transformedData)) {
        if(typeof transformedData === "object"){
            if(transformedData.code === 2){
                console.error("coinex: pair not found");
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
    return accus;
}