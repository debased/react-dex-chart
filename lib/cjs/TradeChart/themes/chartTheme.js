"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightTheme = exports.darkTheme = void 0;
exports.darkTheme = {
    name: 'dark',
    //default for now
    candleStickConfig: {},
    histogramConfig: {},
    chartLayout: {
        layout: {
            backgroundColor: "#131722",
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
};
exports.lightTheme = {
    name: 'light',
    //default for now
    candleStickConfig: {},
    histogramConfig: {},
    chartLayout: {
        layout: {
            backgroundColor: "#ffff",
            lineColor: "#0000",
            textColor: "#0000",
        },
        grid: {
            vertLines: {
                color: "rgba(0, 0, 0, .1)",
            },
            horzLines: {
                color: "rgba(0, 0, 0, .1)",
            },
        },
    }
};
