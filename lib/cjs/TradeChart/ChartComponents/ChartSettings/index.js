"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var helpers_1 = require("../../utils/helpers");
var ChartHeader_1 = require("../ChartHeader");
var ChartDropdown_1 = require("../ChartDropdown");
var TradingSettings_1 = __importDefault(require("./TradingSettings"));
var TimezoneSettings_1 = __importDefault(require("./TimezoneSettings"));
var BackgroundSettings_1 = __importDefault(require("./BackgroundSettings"));
var react_draggable_1 = __importDefault(require("react-draggable")); // Both at the same time
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var Settings = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    min-width: 400px;\n\n    font-size: 12px;\n    h5 {\n        font-size: 14px;\n        font-weight: bold;\n        text-transform: uppercase;\n    }\n"], ["\n    min-width: 400px;\n\n    font-size: 12px;\n    h5 {\n        font-size: 14px;\n        font-weight: bold;\n        text-transform: uppercase;\n    }\n"])));
var SettingsHeader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 8px 8px;\n\n    cursor: grab;\n\n    -webkit-touch-callout:  none;\n    -webkit-user-select:    none;\n     -khtml-user-select:    none;\n       -moz-user-select:    none;\n        -ms-user-select:    none;\n            user-select:    none;\n"], ["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 8px 8px;\n\n    cursor: grab;\n\n    -webkit-touch-callout:  none;\n    -webkit-user-select:    none;\n     -khtml-user-select:    none;\n       -moz-user-select:    none;\n        -ms-user-select:    none;\n            user-select:    none;\n"])));
var HeaderItem = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    flex: 1;\n    padding: 8px 8px;\n\n    text-transform: uppercase;\n    text-align: center;\n\n    ", "\n    \n    border-left: 1px solid rgba(250, 250, 250, .1);\n\n"], ["\n    flex: 1;\n    padding: 8px 8px;\n\n    text-transform: uppercase;\n    text-align: center;\n\n    ", "\n    \n    border-left: 1px solid rgba(250, 250, 250, .1);\n\n"])), function (_a) {
    var selected = _a.selected;
    return selected ? "font-weight: bold;" : '';
});
var SettingsContent = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding: 10px 5px;\n\n    height: 200px;\n    min-height: 300px;\n    max-height: 300px;\n\n    overflow: auto;\n"], ["\n    padding: 10px 5px;\n\n    height: 200px;\n    min-height: 300px;\n    max-height: 300px;\n\n    overflow: auto;\n"])));
var Tabs = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 8px 0px;\n    margin-right: 20px;\n    border: 1px solid rgba(250, 250, 250, .1);\n"], ["\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 8px 0px;\n    margin-right: 20px;\n    border: 1px solid rgba(250, 250, 250, .1);\n"])));
var SettingsExit = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    margin-right: 4px;\n"], ["\n    margin-right: 4px;\n"])));
var ChartSettings = function (_a) {
    var settings = _a.settings, updateSetting = _a.updateSetting, reset = _a.reset;
    var ref = (0, react_2.useRef)();
    (0, helpers_1.useHandleClickOutside)(ref, function () {
        setShow(false);
    });
    var _b = (0, react_2.useState)(false), show = _b[0], setShow = _b[1];
    var _c = (0, react_2.useState)("trading"), tab = _c[0], setTab = _c[1];
    var headerItems = [
        { title: 'trading', component: react_1.default.createElement(TradingSettings_1.default, { settings: settings, updateSetting: updateSetting, reset: reset }) },
        { title: 'background', component: react_1.default.createElement(BackgroundSettings_1.default, { background: settings.background, settings: settings, updateSetting: updateSetting, reset: reset }) },
        { title: 'timezone', component: react_1.default.createElement(TimezoneSettings_1.default, { settings: settings, updateSetting: updateSetting, reset: reset }) },
    ];
    var content = headerItems.filter(function (obj) { return obj.title.toLowerCase() === tab.toLowerCase(); });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ChartHeader_1.ChartHeaderItem, { onClick: function () { return setShow(true); } },
            react_1.default.createElement(react_bootstrap_icons_1.Gear, null)),
        react_1.default.createElement(react_draggable_1.default, { bounds: "body", handle: "span" },
            react_1.default.createElement(ChartDropdown_1.ChartDropdownContent, { display: show, position: "center", ref: ref },
                react_1.default.createElement(Settings, null,
                    react_1.default.createElement("span", null,
                        react_1.default.createElement(SettingsHeader, null,
                            react_1.default.createElement("h5", null, "Trading Settings"),
                            react_1.default.createElement(SettingsExit, { onClick: function (e) {
                                    e.preventDefault();
                                    setShow(!show);
                                } },
                                react_1.default.createElement(react_bootstrap_icons_1.XLg, { size: 22 })))),
                    react_1.default.createElement(Tabs, null, headerItems.map(function (item, key) { return (react_1.default.createElement(HeaderItem, { key: key, selected: tab === item.title, onClick: function () { return setTab(item.title); } }, item.title)); })),
                    react_1.default.createElement(SettingsContent, null, content[0].component))))));
};
exports.default = ChartSettings;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
