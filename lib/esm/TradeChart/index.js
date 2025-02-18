var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ChartView } from "./ChartView";
import { ChartHeader } from "./ChartComponents/ChartHeader";
import { ChartLegendLastCandleInformation } from "./ChartComponents/ChartLegends/ChartLegendLastCandleInformation";
var ChartContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\n\nflex: 1;\nbackground: ", ";\n"], ["\ndisplay: flex;\nflex-direction: column;\n\nflex: 1;\nbackground: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.layout.backgroundColor;
});
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            error: undefined,
        };
        return _this;
    }
    ErrorBoundary.getDerivedStateFromError = function (error) {
        return {
            error: error
        };
    };
    ErrorBoundary.prototype.componentDidCatch = function (error) {
        this.setState({
            error: error
        });
    };
    ErrorBoundary.prototype.render = function () {
        return (React.createElement(React.Fragment, null, this.state.error ? (React.createElement(React.Fragment, null, typeof this.state.error === "string" ? "".concat(this.state.error) : 'An error occured')) : (React.createElement(React.Fragment, null, this.props.children))));
    };
    return ErrorBoundary;
}(React.Component));
export var TradeChart = function (props) {
    var candleData = props.candleData;
    var chartLayout = props.chartLayout;
    var settings = props.settings;
    var updateSetting = props.updateSetting;
    var marketInfo = props.marketInfo;
    var background = settings.background.color;
    chartLayout.layout.backgroundColor = background ? "rgba(".concat(background.r, ",").concat(background.g, ",").concat(background.b, ",").concat(background.a, ")") : chartLayout.layout.backgroundColor;
    //data
    var pair = marketInfo.baseAsset.symbol + "-" + marketInfo.quoteAsset.symbol;
    var _a = useState([]), updateData = _a[0], _ = _a[1];
    //legend OHLC
    var _b = useState(undefined), selectedLegendCandle = _b[0], setLegendCandle = _b[1];
    var _c = useState(undefined), priorLegendCandle = _c[0], setPriorLegendCandle = _c[1];
    var legends = {
        items: [{
                name: 'Last Candle Information (OHLC)',
                type: "crosshair",
                fnc: function (param) {
                    //console.log(param);
                    //nothing in current row
                    if (param.time === undefined) {
                        setLegendCandle(undefined);
                        var priorCandle = candleData[candleData.length - 1];
                        setLegendCandle(updateData);
                        setPriorLegendCandle(priorCandle);
                        return;
                    }
                    //current selected candle
                    var candle = candleData.filter(function (c) { return c.time === param.time; })[0];
                    if (!candle)
                        return;
                    var currentCandle = candleData.indexOf(candle); //current candle index
                    var previousCandle = candleData[currentCandle - 1]; //candle before current
                    setLegendCandle(candleData[currentCandle]);
                    setPriorLegendCandle(previousCandle);
                },
                component: React.createElement(ChartLegendLastCandleInformation, __assign({ candleBefore: priorLegendCandle }, selectedLegendCandle)),
            }],
    };
    return (React.createElement(ThemeProvider, { theme: chartLayout },
        React.createElement(ChartContainer, null,
            React.createElement(ErrorBoundary, null,
                React.createElement(ChartHeader, { marketInfo: props.marketInfo, interval: props.interval, intervals: props.intervals, setInterval: props.setInterval, settings: settings, updateSetting: updateSetting, reset: props.reset }),
                React.createElement(ChartView, { initialChartData: candleData, updateData: updateData, orders: props.userOrders, userFills: props.userFills, marketAlias: pair, legends: legends, chartLayout: chartLayout, candleStickConfig: props.candleStickConfig, histogramConfig: props.histogramConfig, chartSetting: props.settings })))));
};
var templateObject_1;
