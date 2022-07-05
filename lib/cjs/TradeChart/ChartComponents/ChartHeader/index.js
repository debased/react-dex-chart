"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartHeader = exports.ChartHeaderItem = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var ChartSettings_1 = __importDefault(require("../ChartSettings"));
var IntervalSwitch_1 = __importDefault(require("../IntervalSwitch"));
var ChartHeaderContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    \n    flex-wrap: no-wrap;\n\n"], ["\n    display: flex;\n    flex-direction: row;\n    \n    flex-wrap: no-wrap;\n\n"])));
var ChartHeaderItems = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    flex: 1;\n    \n    border-bottom: 1px solid rgba(250, 250, 250, .1);\n\n\n"], ["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    flex: 1;\n    \n    border-bottom: 1px solid rgba(250, 250, 250, .1);\n\n\n"])));
exports.ChartHeaderItem = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n\n    flex-wrap: no-wrap;\n    height: 39px;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 8px 16px;\n\n    -webkit-touch-callout: none;/* iOS Safari */\n    -webkit-user-select: none;  /* Safari */\n    -khtml-user-select: none;   /* Konqueror HTML */\n    -moz-user-select: none;     /* Old versions of Firefox */\n    -ms-user-select: none;      /* Internet Explorer/Edge */\n    user-select: none;          /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n\n    img {\n        height: 18px;\n        margin: 4px;\n        margin-right: 10px;\n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n\n    flex-wrap: no-wrap;\n    height: 39px;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 8px 16px;\n\n    -webkit-touch-callout: none;/* iOS Safari */\n    -webkit-user-select: none;  /* Safari */\n    -khtml-user-select: none;   /* Konqueror HTML */\n    -moz-user-select: none;     /* Old versions of Firefox */\n    -ms-user-select: none;      /* Internet Explorer/Edge */\n    user-select: none;          /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n\n    img {\n        height: 18px;\n        margin: 4px;\n        margin-right: 10px;\n    }\n"])));
var ChartHeaderSymbol = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n\n    font-size: 14px;\n    font-weight: bold;\n"], ["\n    display: flex;\n    flex-direction: column;\n\n    font-size: 14px;\n    font-weight: bold;\n"])));
var ChartHeader = function (_a) {
    var marketInfo = _a.marketInfo, interval = _a.interval, intervals = _a.intervals, setInterval = _a.setInterval, settings = _a.settings, updateSetting = _a.updateSetting;
    return (react_1.default.createElement(ChartHeaderContainer, null,
        react_1.default.createElement(ChartHeaderItems, null,
            react_1.default.createElement(ChartHeaderContainer, null,
                react_1.default.createElement(exports.ChartHeaderItem, { ref: undefined },
                    react_1.default.createElement("img", { alt: "" }),
                    react_1.default.createElement(ChartHeaderSymbol, null,
                        react_1.default.createElement("span", null,
                            marketInfo.baseAsset.symbol,
                            "/",
                            marketInfo.quoteAsset.symbol))),
                react_1.default.createElement(IntervalSwitch_1.default, { interval: interval, intervals: intervals, favourites: [], addFavourite: function (fav) { return console.log(fav); }, setInterval: setInterval })),
            react_1.default.createElement(ChartHeaderContainer, null,
                react_1.default.createElement(ChartSettings_1.default, { settings: settings, updateSetting: updateSetting })))));
};
exports.ChartHeader = ChartHeader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
