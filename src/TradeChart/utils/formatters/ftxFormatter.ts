import { candleAdaptor } from '../adaptors/ftxAdaptor';

export const ftxFormatter = (transformedData: any) => {
    let accus: Array<any> = [];
    transformedData.reduce((accu: any, curr: any) => {
        const candle = candleAdaptor(curr);
        accus.push(candle);
        return accu;
    }, 0);
    return accus;
}