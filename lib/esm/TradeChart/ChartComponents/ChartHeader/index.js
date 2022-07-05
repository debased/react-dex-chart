var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import Settings from "../ChartSettings";
import IntervalSwitch from "../IntervalSwitch";
var ChartHeaderContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    \n    flex-wrap: no-wrap;\n\n"], ["\n    display: flex;\n    flex-direction: row;\n    \n    flex-wrap: no-wrap;\n\n"])));
var ChartHeaderItems = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    flex: 1;\n    \n    border-bottom: 1px solid rgba(250, 250, 250, .1);\n\n\n"], ["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    flex: 1;\n    \n    border-bottom: 1px solid rgba(250, 250, 250, .1);\n\n\n"])));
export var ChartHeaderItem = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n\n    flex-wrap: no-wrap;\n    height: 39px;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 8px 16px;\n\n    -webkit-touch-callout: none;/* iOS Safari */\n    -webkit-user-select: none;  /* Safari */\n    -khtml-user-select: none;   /* Konqueror HTML */\n    -moz-user-select: none;     /* Old versions of Firefox */\n    -ms-user-select: none;      /* Internet Explorer/Edge */\n    user-select: none;          /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n\n    img {\n        height: 18px;\n        margin: 4px;\n        margin-right: 10px;\n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n\n    flex-wrap: no-wrap;\n    height: 39px;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 8px 16px;\n\n    -webkit-touch-callout: none;/* iOS Safari */\n    -webkit-user-select: none;  /* Safari */\n    -khtml-user-select: none;   /* Konqueror HTML */\n    -moz-user-select: none;     /* Old versions of Firefox */\n    -ms-user-select: none;      /* Internet Explorer/Edge */\n    user-select: none;          /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n\n    img {\n        height: 18px;\n        margin: 4px;\n        margin-right: 10px;\n    }\n"])));
var ChartHeaderSymbol = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n\n    font-size: 14px;\n    font-weight: bold;\n"], ["\n    display: flex;\n    flex-direction: column;\n\n    font-size: 14px;\n    font-weight: bold;\n"])));
export var ChartHeader = function (_a) {
    var marketInfo = _a.marketInfo, interval = _a.interval, intervals = _a.intervals, setInterval = _a.setInterval, settings = _a.settings, updateSetting = _a.updateSetting;
    return (React.createElement(ChartHeaderContainer, null,
        React.createElement(ChartHeaderItems, null,
            React.createElement(ChartHeaderContainer, null,
                React.createElement(ChartHeaderItem, { ref: undefined },
                    React.createElement("img", { alt: "" }),
                    React.createElement(ChartHeaderSymbol, null,
                        React.createElement("span", null,
                            marketInfo.baseAsset.symbol,
                            "/",
                            marketInfo.quoteAsset.symbol))),
                React.createElement(IntervalSwitch, { interval: interval, intervals: intervals, favourites: [], addFavourite: function (fav) { return console.log(fav); }, setInterval: setInterval })),
            React.createElement(ChartHeaderContainer, null,
                React.createElement(Settings, { settings: settings, updateSetting: updateSetting })))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
