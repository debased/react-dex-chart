import React, { useState } from 'react';
import './App.css';

import { ChartSettings, presetSettings, TradeChart } from "react-dex-chart";
import { Theme } from 'react-dex-chart/lib/esm/TradeChart/themes/chartTheme';
import { ThemeToggle } from './ThemeToggle';

const darkTheme: Theme = {
  name: 'dark',
  //default for now
  candleStickConfig: {

  },
  histogramConfig: {

  },

  chartLayout: {
      layout: {
          backgroundColor: "rgba(7, 7, 28, 1)",
          lineColor: "#2B2B43",
          textColor: "#D9D9D9",
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

  },
  histogramConfig: {

  },

  chartLayout: {
      layout: {
          backgroundColor: "rgba(220, 240, 246, 1)",
          lineColor: "#000",
          textColor: "#000",
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

function App() {
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
        color: undefined
      }
    }
  );

  const resetSettings = (s: string) => setSetting({
    ...presetSettings,
  });

  const updateSetting = ({section, type, value}: {section: string, type: string, value: any}) => {
    setSetting({
      ...settings,
      [section]: {
        ...[section],
        [type]: value,
      }
    })
  };
  
  return (
    <div style={{
      minWidth: '100vw',
      minHeight: '100vh',
      background: themePreset.chartLayout.layout.backgroundColor, 
      color: theme === "dark" ? '#fff' : "black"
    }}>
      <ThemeToggle theme={theme} toggleTheme={() => {
          console.log(theme);
          if(theme === "dark") setTheme('light');
          else setTheme('dark');
        }}
      />

      <div style={{
        padding: '50px',
      }}>
        <div style={{ border: '1px solid rgba(240, 240, 240, .2)' }}>
      <TradeChart
        marketInfo={{
          exchange: "binance",
          pricePrecisionDecimal: 6,
          image: null,
          baseAsset: { symbol: 'ETH'}, quoteAsset: { symbol: 'USDT'},
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
  );
}

export default App;
