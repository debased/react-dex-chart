export const coinexFetcher = async (pair: string, interval: string) => {
    var url = `https://api.coinex.com/v1/market/kline?market=${pair}&type=${interval}&limit=1000`;
    return fetch('http://localhost:3005/', {
        headers: {
            'Target-Endpoint': url,
        }
    })
    .then((rsp) => rsp.json())
    .then((json) => {
        if(json.code) throw new Error(json.message);
        return json.data;
    });
}