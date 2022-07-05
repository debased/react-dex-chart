var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import { useHandleClickOutside } from "../../utils/helpers";
import { ChartHeaderItem } from "../ChartHeader";
import { ChartDropdownContent } from "../ChartDropdown";
import TradingSettings from "./TradingSettings";
import TimezoneSettings from "./TimezoneSettings";
import BackgroundSettings from "./BackgroundSettings";
import Draggable from 'react-draggable'; // Both at the same time
var Settings = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    min-width: 400px;\n\n    font-size: 12px;\n    h5 {\n        font-size: 14px;\n        font-weight: bold;\n        text-transform: uppercase;\n    }\n"], ["\n    min-width: 400px;\n\n    font-size: 12px;\n    h5 {\n        font-size: 14px;\n        font-weight: bold;\n        text-transform: uppercase;\n    }\n"])));
var SettingsHeader = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 8px 8px;\n\n    cursor: grab;\n\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n     -khtml-user-select: none; /* Konqueror HTML */\n       -moz-user-select: none; /* Old versions of Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n"], ["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 8px 8px;\n\n    cursor: grab;\n\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n     -khtml-user-select: none; /* Konqueror HTML */\n       -moz-user-select: none; /* Old versions of Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n"])));
var HeaderItem = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    flex: 1;\n    padding: 8px 8px;\n\n    font-weight: bold;\n    text-transform: uppercase;\n    text-align: center;\n\n    ", "\n    \n    border-left: 1px solid rgba(250, 250, 250, .1);\n\n    &:hover{\n        color: white;\n    }\n\n"], ["\n    flex: 1;\n    padding: 8px 8px;\n\n    font-weight: bold;\n    text-transform: uppercase;\n    text-align: center;\n\n    ", "\n    \n    border-left: 1px solid rgba(250, 250, 250, .1);\n\n    &:hover{\n        color: white;\n    }\n\n"])), function (_a) {
    var selected = _a.selected;
    return selected ? 'color: white;' : '';
});
var SettingsContent = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding: 10px 5px;\n\n    height: 200px;\n    min-height: 300px;\n    max-height: 300px;\n\n    overflow: auto;\n"], ["\n    padding: 10px 5px;\n\n    height: 200px;\n    min-height: 300px;\n    max-height: 300px;\n\n    overflow: auto;\n"])));
var Tabs = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 8px 0px;\n    margin-right: 20px;\n    border: 1px solid rgba(250, 250, 250, .1);\n"], ["\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 8px 0px;\n    margin-right: 20px;\n    border: 1px solid rgba(250, 250, 250, .1);\n"])));
var SettingsExit = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    margin-right: 4px;\n"], ["\n    margin-right: 4px;\n"])));
var ChartSettings = function (_a) {
    var settings = _a.settings, updateSetting = _a.updateSetting;
    var ref = useRef();
    useHandleClickOutside(ref, function () {
        setShow(false);
    });
    var _b = useState(false), show = _b[0], setShow = _b[1];
    var _c = useState("trading"), tab = _c[0], setTab = _c[1];
    var headerItems = [
        { title: 'trading', component: React.createElement(TradingSettings, { settings: settings, updateSetting: updateSetting, reset: function () { return console.log("reset"); } }) },
        { title: 'background', component: React.createElement(BackgroundSettings, { background: settings.background, settings: settings, updateSetting: updateSetting, reset: function () { return console.log("reset"); } }) },
        { title: 'timezone', component: React.createElement(TimezoneSettings, { settings: settings, updateSetting: updateSetting }) },
    ];
    var content = headerItems.filter(function (obj) { return obj.title.toLowerCase() === tab.toLowerCase(); });
    return (React.createElement(React.Fragment, null,
        React.createElement(ChartHeaderItem, { ref: undefined, onClick: function () { return setShow(true); } }, "\u2699\uFE0F"),
        React.createElement(Draggable, { bounds: "body", handle: "span" },
            React.createElement(ChartDropdownContent, { position: null, width: null, display: show, ref: ref },
                React.createElement(Settings, null,
                    React.createElement("span", null,
                        React.createElement(SettingsHeader, null,
                            React.createElement("h5", null, "Trading Settings"),
                            React.createElement(SettingsExit, { onClick: function (e) {
                                    e.preventDefault();
                                    setShow(!show);
                                } }, "\u274C"))),
                    React.createElement(Tabs, null, headerItems.map(function (item, key) { return (React.createElement(HeaderItem, { key: key, selected: tab === item.title, onClick: function () { return setTab(item.title); } }, item.title)); })),
                    React.createElement(SettingsContent, null, content[0].component))))));
};
export default ChartSettings;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
