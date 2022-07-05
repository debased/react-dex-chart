# react-dex-chart
📈 A Chart Component built with React, Lightweight-Charts - by debased dao

## Getting Started
These instructions will help guide you to get and setup a copy of this library into to your own local repository and using it.

### Prerequisites
Feel free to use the package manager of your choice:


NPM: `npm install react react-dom react-dex-chart`

Yarn: `yarn install react react-dom react-dex-chart`


### Setting up the chart and its settings

```js
<TradeChart

    marketInfo={{
        alias: "ETH-USDT", 
        pricePrecisionDecimal: 6,
        image: null,
        baseAsset: { symbol: 'ETH'},    
        quoteAsset: { symbol: 'USDT'},
    }}

    userFills={[]}
    userOrders={[]}

    pair={"ETH-USDT"} exchange={"binance"}
    interval={interval} 
    setInterval={setInterval}
    intervals={[
    {id: 0, value: "1h", string: "Hourly"},
    {id: 1, value: "4h", string: "4 Hours"},
    {id: 2, value: "1d", string: "Daily"},
    ]}

    updateSetting={(p: any) => console.log(p)}
    settings={{
        trade: {
            showExecutions: false,
            showOrders: false,
            showPositions: false,
            extendLines: true,
            playSound: true,
        },
        timezone: {
            locale: '-4 UCT (NY)',
            showSessions: false,
        },
        background: {
            gradiant: false,
            color: {
            r: 240,
            g: 240,
            b: 240,
            a: 1,
            }
        }
    }}

/>
```

## Why this library?
Mainly to not have a huge clutter of files in your repo,
while also making it easier for people to use their own already extended charting library with as least possible setup required.

## Documentation
[Find documentation here](https://github.com/debased/react-dex-chart/wiki)

## Recommended usage
We recommend using states for settings, and allowing them to be updated to improve UX.