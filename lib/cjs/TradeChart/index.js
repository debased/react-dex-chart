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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeChart = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var ChartView_1 = require("./ChartView");
var ChartHeader_1 = require("./ChartComponents/ChartHeader");
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
    //legend OHLC
    var _a = (0, react_1.useState)(undefined), selectedLegendCandle = _a[0], setLegendCandle = _a[1];
    var _b = (0, react_1.useState)(undefined), priorLegendCandle = _b[0], setPriorLegendCandle = _b[1];
    var candleData = props.candleData;
    var updateData = props.updateData;
    var chartLayout = props.chartLayout;
    var settings = props.settings;
    var updateSetting = props.updateSetting;
    var marketInfo = props.marketInfo;
    var background = settings.background.color;
    chartLayout.layout.backgroundColor = background ? "rgba(".concat(background.r, ",").concat(background.g, ",").concat(background.b, ",").concat(background.a, ")") : chartLayout.layout.backgroundColor;
    //data
    var pair = marketInfo.baseAsset.symbol + "-" + marketInfo.quoteAsset.symbol;
    var legends = {
        items: [],
    };
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: chartLayout },
        react_1.default.createElement(ChartContainer, null,
            react_1.default.createElement(ErrorBoundary, null,
                react_1.default.createElement(ChartHeader_1.ChartHeader, { marketInfo: props.marketInfo, interval: props.interval, intervals: props.intervals, setInterval: props.setInterval, settings: settings, updateSetting: updateSetting, reset: props.reset }),
                react_1.default.createElement(ChartView_1.ChartView, { initialChartData: candleData, updateData: updateData, orders: props.userOrders, userFills: props.userFills, marketAlias: pair, precision: props.marketInfo.pricePrecisionDecimal, legends: legends, chartLayout: chartLayout, candleStickConfig: props.candleStickConfig, histogramConfig: props.histogramConfig, chartSetting: props.settings })))));
};
exports.TradeChart = TradeChart;
var templateObject_1;
