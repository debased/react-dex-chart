"use client";

import { useState } from "react";
import { ChartSettings, presetSettings, Theme, TradeChart } from "react-dex-chart"

const darkTheme: Theme = {
    name: 'dark',
    //default for now
    candleStickConfig: {
  
      priceFormat: {
        type: 'price',
        minMove: 0.001,
      }
    },
    histogramConfig: {
      visible: true,
      priceLineVisible: false,
      lastValueVisible: false,
      overlay: true,
      
      scaleMargins: {
        top: 0.85,
        bottom: 0,
      }
    },
    chartLayout: {
        layout: {
            backgroundColor: "rgba(7, 7, 28, 1)",
            lineColor: "#2B2B43",
            textColor: "#D9D9D9",
            watermarkColor: 'rgba(250, 250, 250, .2)',
        },
        grid: {
            vertLines: {
                color: "rgba(250, 250, 250, .1)",
            },
            horzLines: {
                color: "rgba(250, 250, 250, .1)",
            },
        },
    }
  }
  
  const lightTheme: Theme = {
    name: 'light',
    //default for now
    candleStickConfig: {
  
      priceFormat: {
        type: 'price',
        minMove: 0.001,
      }
    },
    histogramConfig: {
      priceLineVisible: false,
      lastValueVisible: false,
      overlay: true,
      
      scaleMargins: {
        top: 0.85,
        bottom: 0,
      },
    },
  
    chartLayout: {
        layout: {
            backgroundColor: "rgba(220, 240, 246, 1)",
            lineColor: "#000",
            textColor: "#000",
            watermarkColor: 'rgba(0, 0, 0, .1)',
        },
        grid: {
            vertLines: {
              color: "rgba(0, 0, 0, .3)",
            },
            horzLines: {
              color: "rgba(0, 0, 0, .3)",
            },
        },
    }
}

export const Chart = () => {
    const [theme, setTheme] = useState<string>('dark');
    const themePreset: Theme = theme === "dark" ? darkTheme : lightTheme;
  
    const [interval, setInterval] = useState<string>("1h");
    const [settings, setSetting] = useState<ChartSettings>(
      {
        timezone: {
          locale: '-4 UCT (NY)',
          showSessions: false,
        },
        trade: {
          showExecutions: true,
          showOrders: true,
          showPositions: true,
          extendLines: true,
          playSound: true,
        },
  
        background: {
          gradient: false,
          color: undefined,
          watermark: true,
          //watermarkText: '{PAIR} {INTERVAL}',
        }
      }
    );
  
    const resetSettings = (s: string) => setSetting({
      ...presetSettings,
    });
  
    const updateSetting = ({section, type, value}: {section: string, type: string, value: any}) => {
      let state: ChartSettings = settings;
      let newState:  ChartSettings = settings;
      switch (section) {
        case "trade":
          state = {
            ...settings,
            trade: {
              ...settings.trade,
              [type]: value,
            }
          }
          break;
        case "background":
          state = {
            ...settings,
            background: {
              ...settings.background,
              [type]: value,
            }
          }
          
          break;
        case "timezone": 
          state = {
            ...settings,
            timezone: {
              ...settings.timezone,
              [type]: value,
            }
          };
          break;
        default:
          break;
      }
      
      newState = {
        ...state,
      };
  
      setSetting(newState);
    };

    const data = [
        {
          "id": "0x90278667",
          "token": {
            "id": "0xa0d58b0ab9aa8c6829029a1ed2bfeda20d1e07ad",
            "name": "Raj1000"
          },
          "open": "29390586195",
          "high": "29451142615",
          "low": "2876018649",
          "close": "29390586195",
          "timestamp": "1736845200"
        },
        {
          "id": "0x10988667",
          "token": {
            "id": "0xa0d58b0ab9aa8c6829029a1ed2bfeda20d1e07ad",
            "name": "Raj1000"
          },
          "open": "29404544256",
          "high": "159417156386",
          "low": "29124615",
          "close": "159417156386",
          "timestamp": "1736874000"
        },
        {
          "id": "0x20a68667",
          "token": {
            "id": "0xa0d58b0ab9aa8c6829029a1ed2bfeda20d1e07ad",
            "name": "Raj1000"
          },
          "open": "162752080212",
          "high": "241518549834",
          "low": "4250858560",
          "close": "117658112794",
          "timestamp": "1736877600"
        },
        {
          "id": "0xc0328767",
          "token": {
            "id": "0xa0d58b0ab9aa8c6829029a1ed2bfeda20d1e07ad",
            "name": "Raj1000"
          },
          "open": "4250858560",
          "high": "184664025307",
          "low": "4250858560",
          "close": "184664025307",
          "timestamp": "1736913600"
        },
        {
          "id": "0xd0408767",
          "token": {
            "id": "0xa0d58b0ab9aa8c6829029a1ed2bfeda20d1e07ad",
            "name": "Raj1000"
          },
          "open": "28923887975",
          "high": "187085319576",
          "low": "4250858560",
          "close": "155321366981",
          "timestamp": "1736917200"
        },
        {
          "id": "0xe04e8767",
          "token": {
            "id": "0xa0d58b0ab9aa8c6829029a1ed2bfeda20d1e07ad",
            "name": "Raj1000"
          },
          "open": "54292013625",
          "high": "157686109174",
          "low": "4250858560",
          "close": "157686109174",
          "timestamp": "1736920800"
        },
        {
          "id": "0x50b18767",
          "token": {
            "id": "0xa0d58b0ab9aa8c6829029a1ed2bfeda20d1e07ad",
            "name": "Raj1000"
          },
          "open": "6348935867",
          "high": "167682693545",
          "low": "6348935867",
          "close": "167153880656",
          "timestamp": "1736946000"
        },
        {
          "id": "0x60bf8767",
          "token": {
            "id": "0xa0d58b0ab9aa8c6829029a1ed2bfeda20d1e07ad",
            "name": "Raj1000"
          },
          "open": "52512604604",
          "high": "167465096425",
          "low": "6487861537",
          "close": "167465096425",
          "timestamp": "1736949600"
        },
        {
          "id": "0x70cd8767",
          "token": {
            "id": "0xa0d58b0ab9aa8c6829029a1ed2bfeda20d1e07ad",
            "name": "Raj1000"
          },
          "open": "167614941195",
          "high": "167676177828",
          "low": "6680611120",
          "close": "167676177828",
          "timestamp": "1736953200"
        },
        {
          "id": "0x80db8767",
          "token": {
            "id": "0xa0d58b0ab9aa8c6829029a1ed2bfeda20d1e07ad",
            "name": "Raj1000"
          },
          "open": "168121243450",
          "high": "169159575875",
          "low": "6684514506",
          "close": "166854331789",
          "timestamp": "1736956800"
        },
    ]

    const transformedData = data.map((d) => {
        const date = new Date(Number(d.timestamp));
        // Get the individual components of the date
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11, so add 1
        const day = String(date.getDate()).padStart(2, '0');

            // Construct the formatted date string
            const formattedDate = `${year}-${month}-${day}`;


        return {
            time: formattedDate,
            open: Number(d.open),
            high: Number(d.high),
            low: Number(d.low),
            close: Number(d.close)
        }
    })

    return (
        <div style={{
            minWidth: '100vw',
            minHeight: '100vh',
            background: themePreset.chartLayout.layout.backgroundColor, 
            color: theme === "dark" ? '#fff' : "black"
          }}>
            <div style={{
              padding: '50px',
            }}>
              <div style={{ border: '1px solid rgba(240, 240, 240, .2)'}}>
            <TradeChart
              candleData={transformedData}
              updateData={[]}
              marketInfo={{
                exchange: "binance",
                pricePrecisionDecimal: 6,
                image: null,
                baseAsset: { symbol: 'BTC'}, quoteAsset: { symbol: 'USDT'},
              }}
              userFills={[
                {id: 1, price: 1150, side: 'b', market: 'ETH-USDT', time: new Date().getTime() / 1000 - 36000},
                {id: 1, price: 1250, side: 's', market: 'ETH-USDT', time: new Date().getTime() / 1000}
              ]}
              userOrders={[
                {price: '1100', size: '1', side: 'b', market: 'ETH-USDT', status: 'o'},
              ]}
              interval={interval} setInterval={setInterval}
              intervals={[
                {id: 0, value: "1m", string: "1 Minutes"},
                {id: 1, value: "5m", string: "5 Minutes"},
                {id: 2, value: "15m", string: "30 Minutes"},
                {id: 3, value: "1h", string: "Hourly"},
                {id: 4, value: "2h", string: "2 Hours"},
                {id: 5, value: "4h", string: "4 Hours"},
                {id: 6, value: "1d", string: "Daily"},
                {id: 7, value: "1w", string: "Weekly"},
                {id: 8, value: "1M", string: "Monthly"},
              ]}
              candleStickConfig={themePreset.candleStickConfig}
              histogramConfig={themePreset.histogramConfig}
              chartLayout={themePreset.chartLayout}
      
              reset={resetSettings}
              updateSetting={updateSetting}
              settings={settings}
            />
            </div>
              <a
                className="App-link"
                href="https://github.com/debased/react-dex-chart"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github react-dex-chart
              </a>
      
            </div>
        </div>
    )
}