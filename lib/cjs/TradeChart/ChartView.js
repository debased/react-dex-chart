"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartView = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var lightweight_charts_1 = require("lightweight-charts");
var ChartLoaderSpinner_1 = __importDefault(require("./ChartComponents/ChartLoaderSpinner"));
var ContainerStyle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 400px;\n  width: 100%:\n  max-width: 30vw;\n\n  @media only screen and (max-width: 990px) {\n    min-width: 100vw;\n    max-height: 250px;\n  }\n  @media only screen and (max-width: 1200px) {\n    max-width: 500px;\n  }\n"], ["\n  height: 400px;\n  width: 100%:\n  max-width: 30vw;\n\n  @media only screen and (max-width: 990px) {\n    min-width: 100vw;\n    max-height: 250px;\n  }\n  @media only screen and (max-width: 1200px) {\n    max-width: 500px;\n  }\n"])));
var LegendContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n\n  z-index: 4;\n  margin: 8px;\n"], ["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n\n  z-index: 4;\n  margin: 8px;\n"])));
var ChartView = function (_a) {
    var initialChartData = _a.initialChartData, updateData = _a.updateData, candleStickConfig = _a.candleStickConfig, histogramConfig = _a.histogramConfig, chartSetting = _a.chartSetting, chartLayout = _a.chartLayout, _b = _a.orders, orders = _b === void 0 ? [] : _b, _c = _a.userFills, userFills = _c === void 0 ? [] : _c, _d = _a.marketAlias, marketAlias = _d === void 0 ? undefined : _d, _e = _a.legends, legends = _e === void 0 ? { items: [] } : _e;
    var resizeObserver = (0, react_1.useRef)();
    var chartContainerRef = (0, react_1.useRef)();
    var chart = (0, react_1.useRef)();
    var candleSeries = (0, react_1.useRef)();
    var volumeSeries = (0, react_1.useRef)();
    var _f = (0, react_1.useState)([]), priceLines = _f[0], setPriceLines = _f[1];
    var _g = (0, react_1.useState)([]), _ = _g[0], setMarkers = _g[1];
    var setInitialData = (0, react_1.useCallback)(function () {
        var _a, _b;
        candleSeries.current = chart.current.addCandlestickSeries(candleStickConfig);
        volumeSeries.current = chart.current.addHistogramSeries(histogramConfig);
        //legends
        legends.items.forEach(function (legend) {
            if (!legend.fnc)
                return;
            switch (legend.type) {
                case "crosshair":
                    chart.current.subscribeCrosshairMove(legend.fnc);
                    break;
                default:
                    break;
            }
        });
        (_a = candleSeries === null || candleSeries === void 0 ? void 0 : candleSeries.current) === null || _a === void 0 ? void 0 : _a.setData(initialChartData);
        (_b = volumeSeries === null || volumeSeries === void 0 ? void 0 : volumeSeries.current) === null || _b === void 0 ? void 0 : _b.setData(initialChartData);
        setOrderData();
        setMarkerData();
    }, [initialChartData]);
    //set order price lines
    var setMarkerData = function () {
        var _a, _b;
        (_a = candleSeries === null || candleSeries === void 0 ? void 0 : candleSeries.current) === null || _a === void 0 ? void 0 : _a.setMarkers([]);
        if (!chartSetting.trade.showExecutions)
            return;
        var createMarkers = function (ms) {
            var formatted = [];
            for (var key in ms) {
                var f = ms[key];
                var market = f[2];
                var side = f[3];
                //break;
                var marker = {
                    time: new Date(f[12]).getTime() / 1000,
                    position: side === "b" ? 'belowBar' : 'aboveBar',
                    color: side === "b" ? '#26A69A' : 'red',
                    shape: side === "b" ? 'arrowUp' : 'arrowDown',
                    text: side === "b" ? 'buy' : 'sell',
                };
                if (market === marketAlias)
                    formatted.push(marker);
            }
            return formatted;
        };
        var formattedMarkers = createMarkers(userFills);
        (_b = candleSeries === null || candleSeries === void 0 ? void 0 : candleSeries.current) === null || _b === void 0 ? void 0 : _b.setMarkers(formattedMarkers);
        setMarkers(formattedMarkers);
    };
    //set order price lines
    var setOrderData = function () {
        priceLines.forEach(function (priceLine) {
            var _a;
            (_a = candleSeries === null || candleSeries === void 0 ? void 0 : candleSeries.current) === null || _a === void 0 ? void 0 : _a.removePriceLine(priceLine);
            var temp = priceLines.filter(function (line) { return line !== priceLine; });
            setPriceLines(temp);
        });
        if (!chartSetting.trade.showOrders)
            return;
        var createOrders = function (os) {
            var formatted = [];
            for (var key in os) {
                var o = os[key];
                var order = {
                    market: o[2],
                    side: o[3],
                    price: parseFloat(o[4]).toFixed(3),
                    size: parseFloat(o[5]).toFixed(3),
                    status: o[9]
                };
                //has to be current market, not included and open status
                if (order.market === marketAlias && !formatted.includes(order) && order.status === "o") {
                    formatted.push(order);
                }
            }
            return formatted;
        };
        var formattedOrders = createOrders(orders);
        formattedOrders.forEach(function (order) {
            var _a;
            var priceLine = (_a = candleSeries === null || candleSeries === void 0 ? void 0 : candleSeries.current) === null || _a === void 0 ? void 0 : _a.createPriceLine({
                price: order.price,
                color: order.side === "s" ? '#d11736' : '#176bd1',
                lineWidth: 1,
                lineStyle: lightweight_charts_1.LineStyle.Solid,
                axisLabelVisible: true,
                title: "".concat(order.side === "s" ? "sell" : "buy", " order ").concat(order.size),
            });
            var temp = priceLines;
            temp.push(priceLine);
            setPriceLines(temp);
        });
    };
    (0, react_1.useEffect)(function () {
        if (!chart.current)
            return;
        setOrderData();
    }, [orders, chart, chartSetting]);
    (0, react_1.useEffect)(function () {
        if (!chart.current)
            return;
        setMarkerData();
    }, [userFills, chart, chartSetting]);
    //candle data
    (0, react_1.useEffect)(function () {
        var _a, _b;
        (_a = candleSeries === null || candleSeries === void 0 ? void 0 : candleSeries.current) === null || _a === void 0 ? void 0 : _a.update(updateData);
        (_b = volumeSeries === null || volumeSeries === void 0 ? void 0 : volumeSeries.current) === null || _b === void 0 ? void 0 : _b.update(updateData);
    }, [updateData]);
    //initialize chart
    (0, react_1.useEffect)(function () {
        if (!chartContainerRef.current)
            return;
        chartContainerRef.current.innerHTML = "";
        chart.current = (0, lightweight_charts_1.createChart)(chartContainerRef.current, {
            layout: __assign({}, chartLayout.layout),
            grid: chartLayout.grid,
            timeScale: {
                timeVisible: true,
                secondsVisible: true,
                minBarSpacing: 1,
                rightOffset: 10,
            },
            rightPriceScale: {},
            crosshair: {
                mode: 0,
            },
        });
        setInitialData();
        return function () { return chart.current.remove(); };
    }, [setInitialData]);
    //update background settings
    (0, react_1.useEffect)(function () {
        if (!chart.current)
            return;
        var color = chartSetting.background.color;
        var background = color ? "rgba(".concat(color.r, ",").concat(color.g, ",").concat(color.b, ",").concat(color.a) : chartLayout.layout.backgroundColor;
        chart.current.applyOptions(__assign(__assign({}, chartLayout), { layout: __assign(__assign({}, chartLayout.layout), { backgroundColor: background }) }));
    }, [chartLayout, chartSetting.background.color]);
    // Resize chart on container resizes.
    (0, react_1.useEffect)(function () {
        if (!chartContainerRef.current)
            return;
        resizeObserver.current = new ResizeObserver(function (entries) {
            var _a = entries[0].contentRect, width = _a.width, height = _a.height;
            chart.current.applyOptions({
                width: width,
                height: height,
            });
        });
        resizeObserver.current.observe(chartContainerRef.current);
        return function () { return resizeObserver.current.disconnect(); };
    }, []);
    if (!initialChartData)
        return react_1.default.createElement(ChartLoaderSpinner_1.default, { text: "Loading data" });
    //setup legends
    var legendList = legends.items.map(function (legend, key) { return react_1.default.createElement("div", { key: key }, legend.component); });
    return (react_1.default.createElement(ContainerStyle, null,
        react_1.default.createElement(LegendContainer, null, legendList),
        react_1.default.createElement("div", { ref: chartContainerRef, style: {
                width: '100%',
                height: '100%'
            } })));
};
exports.ChartView = ChartView;
var templateObject_1, templateObject_2;
