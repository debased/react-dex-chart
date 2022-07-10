# 📈 react-dex-chart 📉
## A Chart Component built with `react` and `lightweight-charts` - by debased dao

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Sicko Mode][sick-shield]][sick-url]


![](https://i.imgur.com/dHnVDiM.png)
![](https://i.imgur.com/IAknieO.png)

-----

- [x] Themes
- [x] Settings
- [x] Easy to use
- [x] Responsive

-----

## Getting Started
These instructions will help guide you to get and setup a copy of this library into to your own local repository and using it.

## Incomplete Parts
Currenctly background gradiant is not yet implemented, and some exchanges do not work for data fetching, be it static or live.
For some exchanges you will need your own CORS proxy server in order to load data.

## Data fetching
This library is designed to use other exchanges API endpoints to fetch reliable data,
this is done by pair splitting and listening to remote-endpoints

Static data fetching currently works for these exchanges

- [x] Binance
- [x] Coinbase
- [ ] Kucoin
- [ ] Coinex
- [ ] FTX


Live data fetching currently works for these exchanges

- [x] Binance
- [ ] Coinbase
- [ ] Kucoin
- [ ] Coinex
- [ ] FTX

## Prerequisites
Feel free to use the package manager of your choice:


NPM: `npm install react react-dom react-dex-chart`

Yarn: `yarn add react react-dom react-dex-chart`

------

## Development
If you are not interested in contributing to this repo and only in setting the chart up, skip to the part ahead.

### Testing:

`cd react-dex-chart && npm install`

`sudo npm link`

Inside of your testing project: 

`npm link react-dex-chart`

`npm run start`

Setup the chart as usual to get started with development

### Building react-dex-chart:

`npm run build`

------

## Setting up the chart and its settings

Create your own themes

You can setup your own color schemes, or only allow a singular theme:
```js

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
```

Configure settings, and add your own:
```js
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
```

----
## View example project
https://github.com/debased/react-dex-chart/

## Why this library?
Mainly to not have a huge clutter of files in your repo,
while also making an extended and easier to use charting library with an as least possible setup required and many options.

## Documentation
[Find documentation here](https://debased.github.io/react-dex-chart/)

## Recommended usage
We recommend using component states for settings, and allowing them to be updated to improve UX.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[sick-shield]: https://img.shields.io/badge/sick-approved-blue
[sick-url]: https://github.com/debased/react-dex-chart
[contributors-shield]: https://img.shields.io/github/contributors/debased/react-dex-chart.svg?style=for-the-badge
[contributors-url]: https://github.com/debased/react-dex-chart/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/debased/react-dex-chart.svg?style=for-the-badge
[forks-url]: https://github.com/debased/react-dex-chart/network/members
[stars-shield]: https://img.shields.io/github/stars/debased/react-dex-chart.svg?style=for-the-badge
[stars-url]: https://github.com/debased/react-dex-chart/stargazers
[issues-shield]: https://img.shields.io/github/issues/debased/react-dex-chart.svg?style=for-the-badge
[issues-url]: https://github.com/debased/react-dex-chart/issues
[license-shield]: https://img.shields.io/github/license/debased/react-dex-chart.svg?style=for-the-badge
[license-url]: https://github.com/debased/react-dex-chart/blob/master/LICENSE.txt
