"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeChart = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var ChartView_1 = require("./ChartView");
var ChartHeader_1 = require("./ChartComponents/ChartHeader");
var ChartLegendLastCandleInformation_1 = require("./ChartComponents/ChartLegends/ChartLegendLastCandleInformation");
var coinbaseListener_1 = require("./utils/listeners/coinbaseListener");
var binanceListener_1 = require("./utils/listeners/binanceListener");
var fetchers_1 = require("./utils/fetchers");
var formatters_1 = require("./utils/formatters");
var ChartContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\n\nflex: 1;\nbackground: ", ";\n"], ["\ndisplay: flex;\nflex-direction: column;\n\nflex: 1;\nbackground: ", ";\n"])), function (_a) {
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
        return (react_1.default.createElement(react_1.default.Fragment, null, this.state.error ? (react_1.default.createElement(react_1.default.Fragment, null, typeof this.state.error === "string" ? "".concat(this.state.error) : 'An error occured')) : (react_1.default.createElement(react_1.default.Fragment, null, this.props.children))));
    };
    return ErrorBoundary;
}(react_1.default.Component));
var TradeChart = function (props) {
    var chartLayout = props.chartLayout;
    var settings = props.settings;
    var updateSetting = props.updateSetting;
    var marketInfo = props.marketInfo;
    var background = settings.background.color;
    chartLayout.layout.backgroundColor = background ? "rgba(".concat(background.r, ",").concat(background.g, ",").concat(background.b, ",").concat(background.a, ")") : chartLayout.layout.backgroundColor;
    //data
    var pair = marketInfo.baseAsset.symbol + "-" + marketInfo.quoteAsset.symbol;
    var _a = (0, react_1.useState)([]), candleData = _a[0], setData = _a[1];
    var _b = (0, react_1.useState)([]), updateData = _b[0], setUpdateData = _b[1];
    //legend OHLC
    var _c = (0, react_1.useState)(undefined), selectedLegendCandle = _c[0], setLegendCandle = _c[1];
    var _d = (0, react_1.useState)(undefined), priorLegendCandle = _d[0], setPriorLegendCandle = _d[1];
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
                component: react_1.default.createElement(ChartLegendLastCandleInformation_1.ChartLegendLastCandleInformation, __assign({ candleBefore: priorLegendCandle }, selectedLegendCandle)),
            }],
    };
    //fetch and set candle data once pair or interval changes
    var fetchCandleData = (0, react_1.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var transformedData, formattedData, priorCandle, lastCandle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setData([]);
                    return [4 /*yield*/, (0, fetchers_1.fetcher)(pair, props.interval, props.marketInfo.exchange, function (value) {
                            console.error("error: ", value);
                        })];
                case 1:
                    transformedData = _a.sent();
                    formattedData = (0, formatters_1.candleStickFormatter)(transformedData, props.marketInfo.exchange);
                    priorCandle = formattedData[formattedData.length - 2];
                    lastCandle = formattedData[formattedData.length - 1];
                    setData(formattedData);
                    setUpdateData(lastCandle);
                    setLegendCandle(lastCandle);
                    setPriorLegendCandle(priorCandle);
                    return [2 /*return*/];
            }
        });
    }); }, [pair, props.interval]);
    //fetch candle data using websockets and add it to the data. 
    (0, react_1.useEffect)(function () {
        var interval = props.interval;
        var exchange = props.marketInfo.exchange;
        var ws, listener, dependencies;
        var formattedInterval;
        switch (exchange.toLowerCase()) {
            case "coinbase":
                var formattedPair = pair;
                ws = new WebSocket("wss://ws-feed.exchange.coinbase.com");
                dependencies = { productIds: [formattedPair], interval: interval, exchange: exchange };
                listener = coinbaseListener_1.coinbaseListener;
                break;
            case "coinex":
                break;
            case "ftx":
                break;
            case "kucoin":
                break;
            case "binance":
            default:
                formattedInterval = interval;
                formattedPair = pair.split('-')[0] + pair.split('-')[1];
                ws = new WebSocket("wss://stream.binance.com/ws/".concat(formattedPair.toLowerCase(), "@kline_").concat(formattedInterval));
                dependencies = {};
                listener = binanceListener_1.binanceListener;
        }
        //no valid websocket found.
        if (!ws)
            return;
        ws.onerror = function (e) {
            console.error(e);
        };
        try {
            //start listener
            listener(ws, function (candle) {
                //update candlestick data
                if (!candleData)
                    return;
                setUpdateData(candle);
                //update legends correspondedly
                legends.items.forEach(function (legend) {
                    legend.fnc({ time: undefined });
                });
            }, dependencies);
        }
        catch (e) {
            console.error(e);
        }
        return function () {
            ws.close();
        };
    }, [pair, props.interval]);
    (0, react_1.useEffect)(function () {
        fetchCandleData()
            .catch(function (e) {
            console.error(e);
        });
    }, [fetchCandleData, props.interval]);
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: chartLayout },
        react_1.default.createElement(ChartContainer, null,
            react_1.default.createElement(ErrorBoundary, null,
                react_1.default.createElement(ChartHeader_1.ChartHeader, { marketInfo: props.marketInfo, interval: props.interval, intervals: props.intervals, setInterval: props.setInterval, settings: settings, updateSetting: updateSetting, reset: props.reset }),
                react_1.default.createElement(ChartView_1.ChartView, { initialChartData: candleData, updateData: updateData, orders: props.userOrders, userFills: props.userFills, marketAlias: pair, legends: legends, chartLayout: chartLayout, candleStickConfig: props.candleStickConfig, histogramConfig: props.histogramConfig, chartSetting: props.settings })))));
};
exports.TradeChart = TradeChart;
var templateObject_1;
