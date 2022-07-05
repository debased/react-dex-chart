"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightTheme = exports.darkTheme = void 0;
exports.darkTheme = {
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
    //default for now
    candleStickConfig: {},
    histogramConfig: {},
    chartLayout: {
        layout: {
            backgroundColor: "#ece8dd",
            lineColor: "#2B2B43",
            textColor: "#262626",
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
