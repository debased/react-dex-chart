"use client";
import moment from "moment";
import { useMemo, useState } from "react";
import { ChartSettings, presetSettings, Theme, TradeChart, secondsToUTCTimestamp } from "react-dex-chart"

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
            attributionLogo: false,
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
            attributionLogo: false,
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
  
    const [selectedInterval, setSelectedInterval] = useState<'days' | 'hours' | 'minutes'>('days');
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

    const dayData = [
      {
        "id": "0x00d89267",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "3583492067",
        "high": "76270499347",
        "low": "3583492067",
        "close": "22305421973",
        "timestamp": "1737676800"
      }
    ]
    const hourData = [
      {
        "id": "0xef258667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "13070554855",
        "high": "13070554855",
        "low": "13070554855",
        "close": "13070554855",
        "timestamp": "1736844783"
      },
      {
        "id": "0xab508667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "13075795634",
        "high": "13075795634",
        "low": "13075795634",
        "close": "13075795634",
        "timestamp": "1736855723"
      },
      {
        "id": "0xed508667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "12945373644",
        "high": "12945373644",
        "low": "12945373644",
        "close": "12945373644",
        "timestamp": "1736855789"
      },
      {
        "id": "0x49838667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "13077878768",
        "high": "13077878768",
        "low": "13077878768",
        "close": "13077878768",
        "timestamp": "1736868681"
      },
      {
        "id": "0x3f848667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "13159851398",
        "high": "13159851398",
        "low": "13159851398",
        "close": "13159851398",
        "timestamp": "1736868927"
      },
      {
        "id": "0x0b918667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "13341053356",
        "high": "13341053356",
        "low": "13341053356",
        "close": "13341053356",
        "timestamp": "1736872203"
      },
      {
        "id": "0x93918667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "13645351581",
        "high": "13645351581",
        "low": "13645351581",
        "close": "13645351581",
        "timestamp": "1736872339"
      },
      {
        "id": "0x73928667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "14057206363",
        "high": "14057206363",
        "low": "14057206363",
        "close": "14057206363",
        "timestamp": "1736872563"
      },
      {
        "id": "0x1f958667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "14370690230",
        "high": "14370690230",
        "low": "14370690230",
        "close": "14370690230",
        "timestamp": "1736873247"
      },
      {
        "id": "0x95a78667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "14475950511",
        "high": "14475950511",
        "low": "14475950511",
        "close": "14475950511",
        "timestamp": "1736877973"
      },
      {
        "id": "0x63b38667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "14475950908",
        "high": "14475950908",
        "low": "14475950908",
        "close": "14475950908",
        "timestamp": "1736880995"
      },
      {
        "id": "0xbdd88667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "14475950969",
        "high": "14475950969",
        "low": "14475950969",
        "close": "14475950969",
        "timestamp": "1736890557"
      },
      {
        "id": "0x17e28667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "14476255753",
        "high": "14476255753",
        "low": "14476255753",
        "close": "14476255753",
        "timestamp": "1736892951"
      },
      {
        "id": "0xe9e28667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "14480828509",
        "high": "14480828509",
        "low": "14480828509",
        "close": "14480828509",
        "timestamp": "1736893161"
      },
      {
        "id": "0x6fe38667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "15121995454",
        "high": "15121995454",
        "low": "15121995454",
        "close": "15121995454",
        "timestamp": "1736893295"
      },
      {
        "id": "0xc3e48667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "15786897042",
        "high": "15786897042",
        "low": "15786897042",
        "close": "15786897042",
        "timestamp": "1736893635"
      },
      {
        "id": "0xc7e48667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "15786897111",
        "high": "15786897111",
        "low": "15786897111",
        "close": "15786897111",
        "timestamp": "1736893639"
      },
      {
        "id": "0xcfe48667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "15792104887",
        "high": "15792104887",
        "low": "15792104887",
        "close": "15792104887",
        "timestamp": "1736893647"
      },
      {
        "id": "0x65e58667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "15797349089",
        "high": "15797349089",
        "low": "15797349089",
        "close": "15797349089",
        "timestamp": "1736893797"
      },
      {
        "id": "0xf9e58667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "16116370248",
        "high": "16116370248",
        "low": "16116370248",
        "close": "16116370248",
        "timestamp": "1736893945"
      },
      {
        "id": "0x65e98667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "16666150326",
        "high": "16666150326",
        "low": "16666150326",
        "close": "16666150326",
        "timestamp": "1736894821"
      },
      {
        "id": "0x8dea8667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "16893602668",
        "high": "16893602668",
        "low": "16893602668",
        "close": "16893602668",
        "timestamp": "1736895117"
      },
      {
        "id": "0xcfee8667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "16893641128",
        "high": "16893641128",
        "low": "16893641128",
        "close": "16893641128",
        "timestamp": "1736896207"
      },
      {
        "id": "0xf3ee8667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "16725127056",
        "high": "16725127056",
        "low": "16725127056",
        "close": "16725127056",
        "timestamp": "1736896243"
      },
      {
        "id": "0x53f18667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "17007352278",
        "high": "17007352278",
        "low": "17007352278",
        "close": "17007352278",
        "timestamp": "1736896851"
      },
      {
        "id": "0xb3f18667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "17943467422",
        "high": "17943467422",
        "low": "17943467422",
        "close": "17943467422",
        "timestamp": "1736896947"
      },
      {
        "id": "0xbff18667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "18924505228",
        "high": "18924505228",
        "low": "18924505228",
        "close": "18924505228",
        "timestamp": "1736896959"
      },
      {
        "id": "0x53f58667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "20823864199",
        "high": "20823864199",
        "low": "20823864199",
        "close": "20823864199",
        "timestamp": "1736897875"
      },
      {
        "id": "0xf3f58667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "23165444458",
        "high": "23165444458",
        "low": "23165444458",
        "close": "23165444458",
        "timestamp": "1736898035"
      },
      {
        "id": "0x19f68667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "24219811677",
        "high": "24219811677",
        "low": "24219811677",
        "close": "24219811677",
        "timestamp": "1736898073"
      },
      {
        "id": "0xa3f68667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "24916313604",
        "high": "24916313604",
        "low": "24916313604",
        "close": "24916313604",
        "timestamp": "1736898211"
      },
      {
        "id": "0x3df78667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "25955271676",
        "high": "25955271676",
        "low": "25955271676",
        "close": "25955271676",
        "timestamp": "1736898365"
      },
      {
        "id": "0xc7f78667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "27304041735",
        "high": "27304041735",
        "low": "27304041735",
        "close": "27304041735",
        "timestamp": "1736898503"
      },
      {
        "id": "0x71fa8667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "27633542787",
        "high": "27633542787",
        "low": "27633542787",
        "close": "27633542787",
        "timestamp": "1736899185"
      },
      {
        "id": "0x8bfb8667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "27692457659",
        "high": "27692457659",
        "low": "27692457659",
        "close": "27692457659",
        "timestamp": "1736899467"
      },
      {
        "id": "0xf1fd8667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "27870652412",
        "high": "27870652412",
        "low": "27870652412",
        "close": "27870652412",
        "timestamp": "1736900081"
      },
      {
        "id": "0xb7ff8667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "28169651214",
        "high": "28169651214",
        "low": "28169651214",
        "close": "28169651214",
        "timestamp": "1736900535"
      },
      {
        "id": "0x53008767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "28623728523",
        "high": "28623728523",
        "low": "28623728523",
        "close": "28623728523",
        "timestamp": "1736900691"
      },
      {
        "id": "0xd3018767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "28930771848",
        "high": "28930771848",
        "low": "28930771848",
        "close": "28930771848",
        "timestamp": "1736901075"
      },
      {
        "id": "0x1f058767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "29017996469",
        "high": "29017996469",
        "low": "29017996469",
        "close": "29017996469",
        "timestamp": "1736901919"
      },
      {
        "id": "0x65068767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "29105494668",
        "high": "29105494668",
        "low": "29105494668",
        "close": "29105494668",
        "timestamp": "1736902245"
      },
      {
        "id": "0xab068767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "29105516041",
        "high": "29105516041",
        "low": "29105516041",
        "close": "29105516041",
        "timestamp": "1736902315"
      },
      {
        "id": "0xb90b8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "29214027703",
        "high": "29214027703",
        "low": "29214027703",
        "close": "29214027703",
        "timestamp": "1736903609"
      },
      {
        "id": "0x03168767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "29323811758",
        "high": "29323811758",
        "low": "29323811758",
        "close": "29323811758",
        "timestamp": "1736906243"
      },
      {
        "id": "0x61188767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "29633702643",
        "high": "29633702643",
        "low": "29633702643",
        "close": "29633702643",
        "timestamp": "1736906849"
      },
      {
        "id": "0x83218767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "29976617455",
        "high": "29976617455",
        "low": "29976617455",
        "close": "29976617455",
        "timestamp": "1736909187"
      },
      {
        "id": "0x9d248767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "30319808037",
        "high": "30319808037",
        "low": "30319808037",
        "close": "30319808037",
        "timestamp": "1736909981"
      },
      {
        "id": "0x4b258767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "30644960800",
        "high": "30644960800",
        "low": "30644960800",
        "close": "30644960800",
        "timestamp": "1736910155"
      },
      {
        "id": "0x9d268767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "30970143526",
        "high": "30970143526",
        "low": "30970143526",
        "close": "30970143526",
        "timestamp": "1736910493"
      },
      {
        "id": "0x693b8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "31386333590",
        "high": "31386333590",
        "low": "31386333590",
        "close": "31386333590",
        "timestamp": "1736915817"
      },
      {
        "id": "0x313d8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "31515199067",
        "high": "31515199067",
        "low": "31515199067",
        "close": "31515199067",
        "timestamp": "1736916273"
      },
      {
        "id": "0xe33e8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "31578105271",
        "high": "31578105271",
        "low": "31578105271",
        "close": "31578105271",
        "timestamp": "1736916707"
      },
      {
        "id": "0x593f8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "31609589820",
        "high": "31609589820",
        "low": "31609589820",
        "close": "31609589820",
        "timestamp": "1736916825"
      },
      {
        "id": "0x1d428767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "31641074252",
        "high": "31641074252",
        "low": "31641074252",
        "close": "31641074252",
        "timestamp": "1736917533"
      },
      {
        "id": "0xb7448767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "31771524889",
        "high": "31771524889",
        "low": "31771524889",
        "close": "31771524889",
        "timestamp": "1736918199"
      },
      {
        "id": "0xd9448767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "32071128571",
        "high": "32071128571",
        "low": "32071128571",
        "close": "32071128571",
        "timestamp": "1736918233"
      },
      {
        "id": "0x23478767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "32374511125",
        "high": "32374511125",
        "low": "32374511125",
        "close": "32374511125",
        "timestamp": "1736918819"
      },
      {
        "id": "0x8b4c8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "32801450684",
        "high": "32801450684",
        "low": "32801450684",
        "close": "32801450684",
        "timestamp": "1736920203"
      },
      {
        "id": "0x494d8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "33457595526",
        "high": "33457595526",
        "low": "33457595526",
        "close": "33457595526",
        "timestamp": "1736920393"
      },
      {
        "id": "0x6b4d8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "33859670572",
        "high": "33859670572",
        "low": "33859670572",
        "close": "33859670572",
        "timestamp": "1736920427"
      },
      {
        "id": "0xcb4d8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "34262510150",
        "high": "34262510150",
        "low": "34262510150",
        "close": "34262510150",
        "timestamp": "1736920523"
      },
      {
        "id": "0xdf4d8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "34598224189",
        "high": "34598224189",
        "low": "34598224189",
        "close": "34598224189",
        "timestamp": "1736920543"
      },
      {
        "id": "0xeb4d8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "34599068726",
        "high": "34599068726",
        "low": "34599068726",
        "close": "34599068726",
        "timestamp": "1736920555"
      },
      {
        "id": "0x534f8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "34632287058",
        "high": "34632287058",
        "low": "34632287058",
        "close": "34632287058",
        "timestamp": "1736920915"
      },
      {
        "id": "0x5f508767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "34831356303",
        "high": "34831356303",
        "low": "34831356303",
        "close": "34831356303",
        "timestamp": "1736921183"
      },
      {
        "id": "0x95508767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35031697686",
        "high": "35031697686",
        "low": "35031697686",
        "close": "35031697686",
        "timestamp": "1736921237"
      },
      {
        "id": "0x65528767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35402474509",
        "high": "35402474509",
        "low": "35402474509",
        "close": "35402474509",
        "timestamp": "1736921701"
      },
      {
        "id": "0x11538767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35743610728",
        "high": "35743610728",
        "low": "35743610728",
        "close": "35743610728",
        "timestamp": "1736921873"
      },
      {
        "id": "0xad538767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35744202056",
        "high": "35744202056",
        "low": "35744202056",
        "close": "35744202056",
        "timestamp": "1736922029"
      },
      {
        "id": "0x85548767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35744202293",
        "high": "35744202293",
        "low": "35744202293",
        "close": "35744202293",
        "timestamp": "1736922245"
      },
      {
        "id": "0x75618767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35744203592",
        "high": "35744203592",
        "low": "35744203592",
        "close": "35744203592",
        "timestamp": "1736925557"
      },
      {
        "id": "0x19678767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35744204894",
        "high": "35744204894",
        "low": "35744204894",
        "close": "35744204894",
        "timestamp": "1736927001"
      },
      {
        "id": "0x1f678767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35744205130",
        "high": "35744205130",
        "low": "35744205130",
        "close": "35744205130",
        "timestamp": "1736927007"
      },
      {
        "id": "0x29678767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35744205367",
        "high": "35744205367",
        "low": "35744205367",
        "close": "35744205367",
        "timestamp": "1736927017"
      },
      {
        "id": "0x5d708767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35761950858",
        "high": "35761950858",
        "low": "35761950858",
        "close": "35761950858",
        "timestamp": "1736929373"
      },
      {
        "id": "0x31768767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35387841258",
        "high": "35387841258",
        "low": "35387841258",
        "close": "35387841258",
        "timestamp": "1736930865"
      },
      {
        "id": "0x2b798767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35709113059",
        "high": "35709113059",
        "low": "35709113059",
        "close": "35709113059",
        "timestamp": "1736931627"
      },
      {
        "id": "0x57798767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35742572983",
        "high": "35742572983",
        "low": "35742572983",
        "close": "35742572983",
        "timestamp": "1736931671"
      },
      {
        "id": "0x0b7e8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35809555251",
        "high": "35809555251",
        "low": "35809555251",
        "close": "35809555251",
        "timestamp": "1736932875"
      },
      {
        "id": "0xa7888767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35844265100",
        "high": "35844265100",
        "low": "35844265100",
        "close": "35844265100",
        "timestamp": "1736935591"
      },
      {
        "id": "0x73898767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35849015276",
        "high": "35849015276",
        "low": "35849015276",
        "close": "35849015276",
        "timestamp": "1736935795"
      },
      {
        "id": "0xa1898767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35853172300",
        "high": "35853172300",
        "low": "35853172300",
        "close": "35853172300",
        "timestamp": "1736935841"
      },
      {
        "id": "0x2f928767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35889438041",
        "high": "35889438041",
        "low": "35889438041",
        "close": "35889438041",
        "timestamp": "1736938031"
      },
      {
        "id": "0xaf938767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36266478023",
        "high": "36266478023",
        "low": "36266478023",
        "close": "36266478023",
        "timestamp": "1736938415"
      },
      {
        "id": "0x07948767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36623314999",
        "high": "36623314999",
        "low": "36623314999",
        "close": "36623314999",
        "timestamp": "1736938503"
      },
      {
        "id": "0x9fba8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36636807308",
        "high": "36636807308",
        "low": "36636807308",
        "close": "36636807308",
        "timestamp": "1736948383"
      },
      {
        "id": "0xd7ca8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36671925696",
        "high": "36671925696",
        "low": "36671925696",
        "close": "36671925696",
        "timestamp": "1736952535"
      },
      {
        "id": "0x45db8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36718157286",
        "high": "36718157286",
        "low": "36718157286",
        "close": "36718157286",
        "timestamp": "1736956741"
      },
      {
        "id": "0xe9f38767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36730470413",
        "high": "36730470413",
        "low": "36730470413",
        "close": "36730470413",
        "timestamp": "1736963049"
      },
      {
        "id": "0x13038867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36764404639",
        "high": "36764404639",
        "low": "36764404639",
        "close": "36764404639",
        "timestamp": "1736966931"
      },
      {
        "id": "0x01148867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36832335506",
        "high": "36832335506",
        "low": "36832335506",
        "close": "36832335506",
        "timestamp": "1736971265"
      },
      {
        "id": "0x1f2e8867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36866358650",
        "high": "36866358650",
        "low": "36866358650",
        "close": "36866358650",
        "timestamp": "1736977951"
      },
      {
        "id": "0x2f2e8867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36866413642",
        "high": "36866413642",
        "low": "36866413642",
        "close": "36866413642",
        "timestamp": "1736977967"
      },
      {
        "id": "0x352e8867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36866457487",
        "high": "36866457487",
        "low": "36866457487",
        "close": "36866457487",
        "timestamp": "1736977973"
      },
      {
        "id": "0x3d2e8867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36866487955",
        "high": "36866487955",
        "low": "36866487955",
        "close": "36866487955",
        "timestamp": "1736977981"
      },
      {
        "id": "0x3b378867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36878892973",
        "high": "36878892973",
        "low": "36878892973",
        "close": "36878892973",
        "timestamp": "1736980283"
      },
      {
        "id": "0x214e8867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36940946126",
        "high": "36940946126",
        "low": "36940946126",
        "close": "36940946126",
        "timestamp": "1736986145"
      },
      {
        "id": "0x01568867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36993161994",
        "high": "36993161994",
        "low": "36993161994",
        "close": "36993161994",
        "timestamp": "1736988161"
      },
      {
        "id": "0x6f678867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36995652104",
        "high": "36995652104",
        "low": "36995652104",
        "close": "36995652104",
        "timestamp": "1736992623"
      },
      {
        "id": "0x93678867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36995653473",
        "high": "36995653473",
        "low": "36995653473",
        "close": "36995653473",
        "timestamp": "1736992659"
      }
    ]

    const minuteData = [
      {
        "id": "0xef258667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "13070554855",
        "high": "13070554855",
        "low": "13070554855",
        "close": "13070554855",
        "timestamp": "1736844783"
      },
      {
        "id": "0xab508667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "13075795634",
        "high": "13075795634",
        "low": "13075795634",
        "close": "13075795634",
        "timestamp": "1736855723"
      },
      {
        "id": "0xed508667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "12945373644",
        "high": "12945373644",
        "low": "12945373644",
        "close": "12945373644",
        "timestamp": "1736855789"
      },
      {
        "id": "0x49838667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "13077878768",
        "high": "13077878768",
        "low": "13077878768",
        "close": "13077878768",
        "timestamp": "1736868681"
      },
      {
        "id": "0x3f848667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "13159851398",
        "high": "13159851398",
        "low": "13159851398",
        "close": "13159851398",
        "timestamp": "1736868927"
      },
      {
        "id": "0x0b918667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "13341053356",
        "high": "13341053356",
        "low": "13341053356",
        "close": "13341053356",
        "timestamp": "1736872203"
      },
      {
        "id": "0x93918667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "13645351581",
        "high": "13645351581",
        "low": "13645351581",
        "close": "13645351581",
        "timestamp": "1736872339"
      },
      {
        "id": "0x73928667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "14057206363",
        "high": "14057206363",
        "low": "14057206363",
        "close": "14057206363",
        "timestamp": "1736872563"
      },
      {
        "id": "0x1f958667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "14370690230",
        "high": "14370690230",
        "low": "14370690230",
        "close": "14370690230",
        "timestamp": "1736873247"
      },
      {
        "id": "0x95a78667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "14475950511",
        "high": "14475950511",
        "low": "14475950511",
        "close": "14475950511",
        "timestamp": "1736877973"
      },
      {
        "id": "0x63b38667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "14475950908",
        "high": "14475950908",
        "low": "14475950908",
        "close": "14475950908",
        "timestamp": "1736880995"
      },
      {
        "id": "0xbdd88667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "14475950969",
        "high": "14475950969",
        "low": "14475950969",
        "close": "14475950969",
        "timestamp": "1736890557"
      },
      {
        "id": "0x17e28667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "14476255753",
        "high": "14476255753",
        "low": "14476255753",
        "close": "14476255753",
        "timestamp": "1736892951"
      },
      {
        "id": "0xe9e28667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "14480828509",
        "high": "14480828509",
        "low": "14480828509",
        "close": "14480828509",
        "timestamp": "1736893161"
      },
      {
        "id": "0x6fe38667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "15121995454",
        "high": "15121995454",
        "low": "15121995454",
        "close": "15121995454",
        "timestamp": "1736893295"
      },
      {
        "id": "0xc3e48667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "15786897042",
        "high": "15786897042",
        "low": "15786897042",
        "close": "15786897042",
        "timestamp": "1736893635"
      },
      {
        "id": "0xc7e48667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "15786897111",
        "high": "15786897111",
        "low": "15786897111",
        "close": "15786897111",
        "timestamp": "1736893639"
      },
      {
        "id": "0xcfe48667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "15792104887",
        "high": "15792104887",
        "low": "15792104887",
        "close": "15792104887",
        "timestamp": "1736893647"
      },
      {
        "id": "0x65e58667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "15797349089",
        "high": "15797349089",
        "low": "15797349089",
        "close": "15797349089",
        "timestamp": "1736893797"
      },
      {
        "id": "0xf9e58667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "16116370248",
        "high": "16116370248",
        "low": "16116370248",
        "close": "16116370248",
        "timestamp": "1736893945"
      },
      {
        "id": "0x65e98667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "16666150326",
        "high": "16666150326",
        "low": "16666150326",
        "close": "16666150326",
        "timestamp": "1736894821"
      },
      {
        "id": "0x8dea8667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "16893602668",
        "high": "16893602668",
        "low": "16893602668",
        "close": "16893602668",
        "timestamp": "1736895117"
      },
      {
        "id": "0xcfee8667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "16893641128",
        "high": "16893641128",
        "low": "16893641128",
        "close": "16893641128",
        "timestamp": "1736896207"
      },
      {
        "id": "0xf3ee8667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "16725127056",
        "high": "16725127056",
        "low": "16725127056",
        "close": "16725127056",
        "timestamp": "1736896243"
      },
      {
        "id": "0x53f18667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "17007352278",
        "high": "17007352278",
        "low": "17007352278",
        "close": "17007352278",
        "timestamp": "1736896851"
      },
      {
        "id": "0xb3f18667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "17943467422",
        "high": "17943467422",
        "low": "17943467422",
        "close": "17943467422",
        "timestamp": "1736896947"
      },
      {
        "id": "0xbff18667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "18924505228",
        "high": "18924505228",
        "low": "18924505228",
        "close": "18924505228",
        "timestamp": "1736896959"
      },
      {
        "id": "0x53f58667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "20823864199",
        "high": "20823864199",
        "low": "20823864199",
        "close": "20823864199",
        "timestamp": "1736897875"
      },
      {
        "id": "0xf3f58667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "23165444458",
        "high": "23165444458",
        "low": "23165444458",
        "close": "23165444458",
        "timestamp": "1736898035"
      },
      {
        "id": "0x19f68667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "24219811677",
        "high": "24219811677",
        "low": "24219811677",
        "close": "24219811677",
        "timestamp": "1736898073"
      },
      {
        "id": "0xa3f68667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "24916313604",
        "high": "24916313604",
        "low": "24916313604",
        "close": "24916313604",
        "timestamp": "1736898211"
      },
      {
        "id": "0x3df78667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "25955271676",
        "high": "25955271676",
        "low": "25955271676",
        "close": "25955271676",
        "timestamp": "1736898365"
      },
      {
        "id": "0xc7f78667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "27304041735",
        "high": "27304041735",
        "low": "27304041735",
        "close": "27304041735",
        "timestamp": "1736898503"
      },
      {
        "id": "0x71fa8667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "27633542787",
        "high": "27633542787",
        "low": "27633542787",
        "close": "27633542787",
        "timestamp": "1736899185"
      },
      {
        "id": "0x8bfb8667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "27692457659",
        "high": "27692457659",
        "low": "27692457659",
        "close": "27692457659",
        "timestamp": "1736899467"
      },
      {
        "id": "0xf1fd8667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "27870652412",
        "high": "27870652412",
        "low": "27870652412",
        "close": "27870652412",
        "timestamp": "1736900081"
      },
      {
        "id": "0xb7ff8667",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "28169651214",
        "high": "28169651214",
        "low": "28169651214",
        "close": "28169651214",
        "timestamp": "1736900535"
      },
      {
        "id": "0x53008767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "28623728523",
        "high": "28623728523",
        "low": "28623728523",
        "close": "28623728523",
        "timestamp": "1736900691"
      },
      {
        "id": "0xd3018767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "28930771848",
        "high": "28930771848",
        "low": "28930771848",
        "close": "28930771848",
        "timestamp": "1736901075"
      },
      {
        "id": "0x1f058767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "29017996469",
        "high": "29017996469",
        "low": "29017996469",
        "close": "29017996469",
        "timestamp": "1736901919"
      },
      {
        "id": "0x65068767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "29105494668",
        "high": "29105494668",
        "low": "29105494668",
        "close": "29105494668",
        "timestamp": "1736902245"
      },
      {
        "id": "0xab068767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "29105516041",
        "high": "29105516041",
        "low": "29105516041",
        "close": "29105516041",
        "timestamp": "1736902315"
      },
      {
        "id": "0xb90b8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "29214027703",
        "high": "29214027703",
        "low": "29214027703",
        "close": "29214027703",
        "timestamp": "1736903609"
      },
      {
        "id": "0x03168767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "29323811758",
        "high": "29323811758",
        "low": "29323811758",
        "close": "29323811758",
        "timestamp": "1736906243"
      },
      {
        "id": "0x61188767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "29633702643",
        "high": "29633702643",
        "low": "29633702643",
        "close": "29633702643",
        "timestamp": "1736906849"
      },
      {
        "id": "0x83218767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "29976617455",
        "high": "29976617455",
        "low": "29976617455",
        "close": "29976617455",
        "timestamp": "1736909187"
      },
      {
        "id": "0x9d248767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "30319808037",
        "high": "30319808037",
        "low": "30319808037",
        "close": "30319808037",
        "timestamp": "1736909981"
      },
      {
        "id": "0x4b258767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "30644960800",
        "high": "30644960800",
        "low": "30644960800",
        "close": "30644960800",
        "timestamp": "1736910155"
      },
      {
        "id": "0x9d268767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "30970143526",
        "high": "30970143526",
        "low": "30970143526",
        "close": "30970143526",
        "timestamp": "1736910493"
      },
      {
        "id": "0x693b8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "31386333590",
        "high": "31386333590",
        "low": "31386333590",
        "close": "31386333590",
        "timestamp": "1736915817"
      },
      {
        "id": "0x313d8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "31515199067",
        "high": "31515199067",
        "low": "31515199067",
        "close": "31515199067",
        "timestamp": "1736916273"
      },
      {
        "id": "0xe33e8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "31578105271",
        "high": "31578105271",
        "low": "31578105271",
        "close": "31578105271",
        "timestamp": "1736916707"
      },
      {
        "id": "0x593f8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "31609589820",
        "high": "31609589820",
        "low": "31609589820",
        "close": "31609589820",
        "timestamp": "1736916825"
      },
      {
        "id": "0x1d428767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "31641074252",
        "high": "31641074252",
        "low": "31641074252",
        "close": "31641074252",
        "timestamp": "1736917533"
      },
      {
        "id": "0xb7448767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "31771524889",
        "high": "31771524889",
        "low": "31771524889",
        "close": "31771524889",
        "timestamp": "1736918199"
      },
      {
        "id": "0xd9448767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "32071128571",
        "high": "32071128571",
        "low": "32071128571",
        "close": "32071128571",
        "timestamp": "1736918233"
      },
      {
        "id": "0x23478767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "32374511125",
        "high": "32374511125",
        "low": "32374511125",
        "close": "32374511125",
        "timestamp": "1736918819"
      },
      {
        "id": "0x8b4c8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "32801450684",
        "high": "32801450684",
        "low": "32801450684",
        "close": "32801450684",
        "timestamp": "1736920203"
      },
      {
        "id": "0x494d8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "33457595526",
        "high": "33457595526",
        "low": "33457595526",
        "close": "33457595526",
        "timestamp": "1736920393"
      },
      {
        "id": "0x6b4d8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "33859670572",
        "high": "33859670572",
        "low": "33859670572",
        "close": "33859670572",
        "timestamp": "1736920427"
      },
      {
        "id": "0xcb4d8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "34262510150",
        "high": "34262510150",
        "low": "34262510150",
        "close": "34262510150",
        "timestamp": "1736920523"
      },
      {
        "id": "0xdf4d8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "34598224189",
        "high": "34598224189",
        "low": "34598224189",
        "close": "34598224189",
        "timestamp": "1736920543"
      },
      {
        "id": "0xeb4d8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "34599068726",
        "high": "34599068726",
        "low": "34599068726",
        "close": "34599068726",
        "timestamp": "1736920555"
      },
      {
        "id": "0x534f8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "34632287058",
        "high": "34632287058",
        "low": "34632287058",
        "close": "34632287058",
        "timestamp": "1736920915"
      },
      {
        "id": "0x5f508767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "34831356303",
        "high": "34831356303",
        "low": "34831356303",
        "close": "34831356303",
        "timestamp": "1736921183"
      },
      {
        "id": "0x95508767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35031697686",
        "high": "35031697686",
        "low": "35031697686",
        "close": "35031697686",
        "timestamp": "1736921237"
      },
      {
        "id": "0x65528767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35402474509",
        "high": "35402474509",
        "low": "35402474509",
        "close": "35402474509",
        "timestamp": "1736921701"
      },
      {
        "id": "0x11538767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35743610728",
        "high": "35743610728",
        "low": "35743610728",
        "close": "35743610728",
        "timestamp": "1736921873"
      },
      {
        "id": "0xad538767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35744202056",
        "high": "35744202056",
        "low": "35744202056",
        "close": "35744202056",
        "timestamp": "1736922029"
      },
      {
        "id": "0x85548767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35744202293",
        "high": "35744202293",
        "low": "35744202293",
        "close": "35744202293",
        "timestamp": "1736922245"
      },
      {
        "id": "0x75618767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35744203592",
        "high": "35744203592",
        "low": "35744203592",
        "close": "35744203592",
        "timestamp": "1736925557"
      },
      {
        "id": "0x19678767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35744204894",
        "high": "35744204894",
        "low": "35744204894",
        "close": "35744204894",
        "timestamp": "1736927001"
      },
      {
        "id": "0x1f678767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35744205130",
        "high": "35744205130",
        "low": "35744205130",
        "close": "35744205130",
        "timestamp": "1736927007"
      },
      {
        "id": "0x29678767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35744205367",
        "high": "35744205367",
        "low": "35744205367",
        "close": "35744205367",
        "timestamp": "1736927017"
      },
      {
        "id": "0x5d708767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35761950858",
        "high": "35761950858",
        "low": "35761950858",
        "close": "35761950858",
        "timestamp": "1736929373"
      },
      {
        "id": "0x31768767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35387841258",
        "high": "35387841258",
        "low": "35387841258",
        "close": "35387841258",
        "timestamp": "1736930865"
      },
      {
        "id": "0x2b798767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35709113059",
        "high": "35709113059",
        "low": "35709113059",
        "close": "35709113059",
        "timestamp": "1736931627"
      },
      {
        "id": "0x57798767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35742572983",
        "high": "35742572983",
        "low": "35742572983",
        "close": "35742572983",
        "timestamp": "1736931671"
      },
      {
        "id": "0x0b7e8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35809555251",
        "high": "35809555251",
        "low": "35809555251",
        "close": "35809555251",
        "timestamp": "1736932875"
      },
      {
        "id": "0xa7888767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35844265100",
        "high": "35844265100",
        "low": "35844265100",
        "close": "35844265100",
        "timestamp": "1736935591"
      },
      {
        "id": "0x73898767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35849015276",
        "high": "35849015276",
        "low": "35849015276",
        "close": "35849015276",
        "timestamp": "1736935795"
      },
      {
        "id": "0xa1898767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35853172300",
        "high": "35853172300",
        "low": "35853172300",
        "close": "35853172300",
        "timestamp": "1736935841"
      },
      {
        "id": "0x2f928767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "35889438041",
        "high": "35889438041",
        "low": "35889438041",
        "close": "35889438041",
        "timestamp": "1736938031"
      },
      {
        "id": "0xaf938767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36266478023",
        "high": "36266478023",
        "low": "36266478023",
        "close": "36266478023",
        "timestamp": "1736938415"
      },
      {
        "id": "0x07948767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36623314999",
        "high": "36623314999",
        "low": "36623314999",
        "close": "36623314999",
        "timestamp": "1736938503"
      },
      {
        "id": "0x9fba8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36636807308",
        "high": "36636807308",
        "low": "36636807308",
        "close": "36636807308",
        "timestamp": "1736948383"
      },
      {
        "id": "0xd7ca8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36671925696",
        "high": "36671925696",
        "low": "36671925696",
        "close": "36671925696",
        "timestamp": "1736952535"
      },
      {
        "id": "0x45db8767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36718157286",
        "high": "36718157286",
        "low": "36718157286",
        "close": "36718157286",
        "timestamp": "1736956741"
      },
      {
        "id": "0xe9f38767",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36730470413",
        "high": "36730470413",
        "low": "36730470413",
        "close": "36730470413",
        "timestamp": "1736963049"
      },
      {
        "id": "0x13038867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36764404639",
        "high": "36764404639",
        "low": "36764404639",
        "close": "36764404639",
        "timestamp": "1736966931"
      },
      {
        "id": "0x01148867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36832335506",
        "high": "36832335506",
        "low": "36832335506",
        "close": "36832335506",
        "timestamp": "1736971265"
      },
      {
        "id": "0x1f2e8867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36866358650",
        "high": "36866358650",
        "low": "36866358650",
        "close": "36866358650",
        "timestamp": "1736977951"
      },
      {
        "id": "0x2f2e8867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36866413642",
        "high": "36866413642",
        "low": "36866413642",
        "close": "36866413642",
        "timestamp": "1736977967"
      },
      {
        "id": "0x352e8867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36866457487",
        "high": "36866457487",
        "low": "36866457487",
        "close": "36866457487",
        "timestamp": "1736977973"
      },
      {
        "id": "0x3d2e8867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36866487955",
        "high": "36866487955",
        "low": "36866487955",
        "close": "36866487955",
        "timestamp": "1736977981"
      },
      {
        "id": "0x3b378867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36878892973",
        "high": "36878892973",
        "low": "36878892973",
        "close": "36878892973",
        "timestamp": "1736980283"
      },
      {
        "id": "0x214e8867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36940946126",
        "high": "36940946126",
        "low": "36940946126",
        "close": "36940946126",
        "timestamp": "1736986145"
      },
      {
        "id": "0x01568867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36993161994",
        "high": "36993161994",
        "low": "36993161994",
        "close": "36993161994",
        "timestamp": "1736988161"
      },
      {
        "id": "0x6f678867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36995652104",
        "high": "36995652104",
        "low": "36995652104",
        "close": "36995652104",
        "timestamp": "1736992623"
      },
      {
        "id": "0x93678867",
        "token": {
          "id": "0xbfb245280d60e30cc033bc79bd1317614ec3016d",
          "name": "PepeUSD"
        },
        "open": "36995653473",
        "high": "36995653473",
        "low": "36995653473",
        "close": "36995653473",
        "timestamp": "1736992659"
      }
    ]

    const data = useMemo(() => {
      let data;
      let multiplier;
      let format;
      switch (selectedInterval) {
        case "days":
          //1737417600
          data = dayData;
          multiplier = 1000;
          format = 'yyyy-mm-dd';
          break;
        case "hours":
          //1738051200
          data = hourData;
          multiplier = 1000;
          format = 'yyyy-mm-dd hh'
          break
        case "minutes":
        default:
          //483144
          data = minuteData;
          multiplier = 0;
          format = 'yyyy-mm-dd hh:mm'
          break;
      }
      return {
        candles: data,
        multiplier
      }
    }, [selectedInterval, dayData, hourData, minuteData]);
    const ethPrice = BigInt(3200);
    const transformedData = data.candles.
    filter((value, index, self) => {
      // Check if the timestamp has appeared before
      return index === self.findIndex((obj) => obj.timestamp === value.timestamp);
    })
    .map((d) => {
      
      //Number(priceInEther * baseTokenPriceUSD) / 1e24

      const open = parseFloat(d.open) / 10**14
      const high = parseFloat(d.high) / 10**14
      const low = parseFloat(d.low) / 10**14
      const close = parseFloat(d.close) / 10**14

      const timestamp = selectedInterval === 'days' 
        ? moment.unix(Number(d.timestamp)).format('yyyy-MM-DD')
        : d.timestamp
      console.log(timestamp)
        return {
            time: secondsToUTCTimestamp(Number(d.timestamp)),
            open: open,
            high: high,
            low: low,
            close: close
        }
    })

    console.log("data", transformedData)
    return (
        <div style={{
            minWidth: '100vw',
            minHeight: '100vh',
            background: themePreset.chartLayout.layout.backgroundColor, 
            color: theme === "dark" ? '#fff' : "black"
          }}>
            <button onClick={() => {
              switch (selectedInterval) {
                case 'days':
                  setSelectedInterval('hours');
                  break;
                case 'hours':
                  setSelectedInterval('minutes');
                  break;
                case 'minutes':
                default:
                  setSelectedInterval('days');
                  break;
              }
            }}>Switch interval ({selectedInterval})</button>
            <div style={{
              padding: '50px',
            }}>
              <div style={{ border: '1px solid rgba(240, 240, 240, .2)'}}>
            <TradeChart
              candleData={transformedData}
              updateData={transformedData}
              marketInfo={{
                exchange: "binance",
                pricePrecisionDecimal: 18,
                image: null,
                baseAsset: { symbol: 'RAAJ1000'}, quoteAsset: { symbol: 'ETH'},
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