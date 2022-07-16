"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
var Item = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n"], ["\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n"])));
var Items = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n"], ["\n    display: flex;\n    flex-direction: column;\n"])));
var ResetButton = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    margin: 12px;\n    padding: 4px 12px;\n\n    background: #3F51B5;\n    border: 1px solid #3F51B5;\n    border-radius: 2px;\n    color: white;\n\n    cursor: pointer;\n\n    &:hover{\n        background: #33439c;\n    }\n"], ["\n    margin: 12px;\n    padding: 4px 12px;\n\n    background: #3F51B5;\n    border: 1px solid #3F51B5;\n    border-radius: 2px;\n    color: white;\n\n    cursor: pointer;\n\n    &:hover{\n        background: #33439c;\n    }\n"])));
var TradingSettings = function (_a) {
    var settings = _a.settings, updateSetting = _a.updateSetting, reset = _a.reset;
    return (react_1.default.createElement(Items, null,
        react_1.default.createElement(Item, null,
            react_1.default.createElement("input", { type: "checkbox", color: "primary", onClick: function () { return updateSetting({ section: 'trade', type: 'showOrders', value: !settings.trade.showOrders }); }, defaultChecked: settings.trade.showOrders }),
            "Show Orders"),
        react_1.default.createElement(Item, null,
            react_1.default.createElement("input", { type: "checkbox", color: "primary", onClick: function () { return updateSetting({ section: 'trade', type: 'showExecutions', value: !settings.trade.showExecutions }); }, defaultChecked: settings.trade.showExecutions }),
            "Show Executions"),
        react_1.default.createElement(Item, null,
            react_1.default.createElement(Items, null,
                react_1.default.createElement(Item, null,
                    react_1.default.createElement("input", { type: "checkbox", color: "primary", onClick: function () { return updateSetting({ section: 'trade', type: 'extendLines', value: !settings.trade.extendLines }); }, defaultChecked: settings.trade.extendLines }),
                    "Extend lines"))),
        react_1.default.createElement(Item, null,
            react_1.default.createElement("input", { type: "checkbox", color: "primary", onClick: function () { return updateSetting({ section: 'trade', type: 'playSound', value: !settings.trade.playSound }); }, defaultChecked: settings.trade.playSound }),
            "Play sound on order execution"),
        react_1.default.createElement(Item, null,
            react_1.default.createElement(ResetButton, { onClick: function () { return reset('trade'); } }, "Defaults"))));
};
exports.default = TradingSettings;
var templateObject_1, templateObject_2, templateObject_3;
