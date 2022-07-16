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
var styled_components_1 = __importDefault(require("styled-components"));
var react_colorful_1 = require("react-colorful");
var Item = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n"], ["\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n"])));
var Items = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n"], ["\n    display: flex;\n    flex-direction: column;\n"])));
var Input = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    flex: 1;\n    margin: 12px;\n    padding: 3px 8px;\n\n    background: #3F51B5;\n    border: 1px solid #3F51B5;\n    color: white;\n\n    width: 100%;\n    height: 20px;\n"], ["\n    flex: 1;\n    margin: 12px;\n    padding: 3px 8px;\n\n    background: #3F51B5;\n    border: 1px solid #3F51B5;\n    color: white;\n\n    width: 100%;\n    height: 20px;\n"])));
var ResetButton = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    margin: 12px;\n    padding: 4px 12px;\n\n    background: #3F51B5;\n    border: 1px solid #3F51B5;\n    border-radius: 2px;\n    color: white;\n\n    cursor: pointer;\n\n    &:hover{\n        background: #33439c;\n    }\n"], ["\n    margin: 12px;\n    padding: 4px 12px;\n\n    background: #3F51B5;\n    border: 1px solid #3F51B5;\n    border-radius: 2px;\n    color: white;\n\n    cursor: pointer;\n\n    &:hover{\n        background: #33439c;\n    }\n"])));
var BackgroundSettings = function (_a) {
    var background = _a.background, settings = _a.settings, updateSetting = _a.updateSetting, reset = _a.reset;
    var color = background.color;
    return (react_1.default.createElement(Items, null,
        react_1.default.createElement(Items, null,
            react_1.default.createElement(Item, null,
                react_1.default.createElement("input", { type: "checkbox", color: "primary", onClick: function () { return updateSetting({ section: 'background', type: 'gradient', value: !settings.background.gradient }); }, defaultChecked: settings.background.gradient }),
                "Background gradient"),
            react_1.default.createElement(Items, null,
                react_1.default.createElement(Item, null,
                    react_1.default.createElement("div", { style: {
                            width: '100%',
                            height: '100%',
                            margin: '20px',
                            padding: '4px',
                            background: color ? "rgba(".concat(color.r, ", ").concat(color.g, ", ").concat(color.b, ", ").concat(color.a, ")") : 'rgba(0, 0, 0, 1)',
                        } }, "Color")),
                react_1.default.createElement(Item, null,
                    react_1.default.createElement(react_colorful_1.RgbaColorPicker, { color: color ? color : { r: 0, g: 0, b: 0, a: 1 }, onChange: function (color) {
                            updateSetting({ section: 'background', type: 'color', value: color });
                        } })))),
        react_1.default.createElement(Item, null,
            react_1.default.createElement(Items, null,
                "V1",
                react_1.default.createElement(Item, null,
                    react_1.default.createElement("input", { type: "checkbox", color: "primary", onClick: function () { return updateSetting({ section: 'background', type: 'watermark', value: !settings.background.watermark }); }, defaultChecked: settings.background.watermark }),
                    "Show Watermark"),
                react_1.default.createElement(Item, null,
                    react_1.default.createElement(Input, { type: "text", onChange: function (e) {
                            updateSetting({
                                section: 'background',
                                type: 'watermarkText',
                                value: e.target.value,
                            });
                        }, defaultValue: settings.background.watermarkText })))),
        react_1.default.createElement(Item, null,
            react_1.default.createElement(ResetButton, { onClick: function () { return reset('background'); } }, "Defaults"))));
};
exports.default = BackgroundSettings;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
