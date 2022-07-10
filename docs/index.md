# react-dex-chart

A Chart Component built with `react` and `lightweight-charts` - by debased dao

![](https://i.imgur.com/dHnVDiM.png)

## Documentation

Documentation for react-dex-chart
## Getting Started

These instructions will help guide you to get and setup a copy of this library into to your own local repository and using it.

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
[Find documentation here](https://github.com/debased/react-dex-chart/wiki)

## Recommended usage
We recommend using component states for settings, and allowing them to be updated to improve UX.
