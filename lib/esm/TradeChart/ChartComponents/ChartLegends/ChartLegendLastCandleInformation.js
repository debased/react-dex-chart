var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
var Legend = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n\n  -webkit-touch-callout: none;/* iOS Safari */\n  -webkit-user-select: none;  /* Safari */\n  -khtml-user-select: none;   /* Konqueror HTML */\n  -moz-user-select: none;     /* Old versions of Firefox */\n  -ms-user-select: none;      /* Internet Explorer/Edge */\n  user-select: none;          /* Non-prefixed version, currently\n                                supported by Chrome, Edge, Opera and Firefox */\n\n"], ["\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n\n  -webkit-touch-callout: none;/* iOS Safari */\n  -webkit-user-select: none;  /* Safari */\n  -khtml-user-select: none;   /* Konqueror HTML */\n  -moz-user-select: none;     /* Old versions of Firefox */\n  -ms-user-select: none;      /* Internet Explorer/Edge */\n  user-select: none;          /* Non-prefixed version, currently\n                                supported by Chrome, Edge, Opera and Firefox */\n\n"])));
var Option = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n\n  font-size: 12px;\n"], ["\n  display: flex;\n  flex-direction: row;\n\n  font-size: 12px;\n"])));
var Type = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-left: 8px;\n"], ["\n  margin-left: 8px;\n"])));
var Value = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-left: 0px;\n  color: ", ";\n  \n"], ["\n  margin-left: 0px;\n  color: ", ";\n  \n"])), function (_a) {
    var positive = _a.positive;
    return positive === undefined ? '#85848A' : (positive ? '#3EDD96' : '#A13245');
});
export var ChartLegendLastCandleInformation = function (_a) {
    var open = _a.open, high = _a.high, low = _a.low, close = _a.close, candleBefore = _a.candleBefore;
    return (React.createElement(Legend, null,
        React.createElement(Option, null,
            React.createElement(Type, null, "O"),
            React.createElement(Value, { positive: open ? ((candleBefore === null || candleBefore === void 0 ? void 0 : candleBefore.open) < open) : undefined }, open ? open : 'NaN')),
        React.createElement(Option, null,
            React.createElement(Type, null, "H"),
            React.createElement(Value, { positive: high ? ((candleBefore === null || candleBefore === void 0 ? void 0 : candleBefore.high) <= high) : undefined }, high ? high : 'NaN')),
        React.createElement(Option, null,
            React.createElement(Type, null, "L"),
            React.createElement(Value, { positive: low ? ((candleBefore === null || candleBefore === void 0 ? void 0 : candleBefore.low) < low) : undefined }, low ? low : 'NaN')),
        React.createElement(Option, null,
            React.createElement(Type, null, "C"),
            React.createElement(Value, { positive: close ? ((candleBefore === null || candleBefore === void 0 ? void 0 : candleBefore.close) ? (candleBefore.close < close) : undefined) : undefined }, close ? close : 'NaN'))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
