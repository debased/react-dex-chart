var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { RgbaColorPicker } from "react-colorful";
var Item = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n"], ["\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n"])));
var Items = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n"], ["\n    display: flex;\n    flex-direction: column;\n"])));
var Input = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    flex: 1;\n    margin: 12px;\n    padding: 3px 8px;\n\n    background: #3F51B5;\n    border: 1px solid #3F51B5;\n    color: white;\n\n    width: 100%;\n    height: 20px;\n"], ["\n    flex: 1;\n    margin: 12px;\n    padding: 3px 8px;\n\n    background: #3F51B5;\n    border: 1px solid #3F51B5;\n    color: white;\n\n    width: 100%;\n    height: 20px;\n"])));
var ResetButton = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    margin: 12px;\n    padding: 4px 12px;\n\n    background: #3F51B5;\n    border: 1px solid #3F51B5;\n    border-radius: 2px;\n    color: white;\n\n    cursor: pointer;\n\n    &:hover{\n        background: #33439c;\n    }\n"], ["\n    margin: 12px;\n    padding: 4px 12px;\n\n    background: #3F51B5;\n    border: 1px solid #3F51B5;\n    border-radius: 2px;\n    color: white;\n\n    cursor: pointer;\n\n    &:hover{\n        background: #33439c;\n    }\n"])));
var BackgroundSettings = function (_a) {
    var background = _a.background, settings = _a.settings, updateSetting = _a.updateSetting, reset = _a.reset;
    var color = background.color;
    return (React.createElement(Items, null,
        React.createElement(Items, null,
            React.createElement(Item, null,
                React.createElement("input", { type: "check", color: "primary", onChange: function () { return updateSetting({ type: 'gradient', value: !settings.background.gradiant }); }, checked: settings.background.gradiant }),
                "Background gradient"),
            React.createElement(Items, null,
                React.createElement(Item, null,
                    React.createElement("div", { style: {
                            width: '100%',
                            height: '100%',
                            margin: '20px',
                            padding: '4px',
                            background: "rgba(".concat(color.r, ", ").concat(color.g, ", ").concat(color.b, ", ").concat(color.a, ")"),
                        } }, "Color")),
                React.createElement(Item, null,
                    React.createElement(RgbaColorPicker, { color: color, onChange: function (color) {
                            updateSetting({ type: 'color', value: color });
                        } })))),
        React.createElement(Item, null,
            React.createElement(Items, null,
                React.createElement(Item, null,
                    React.createElement("input", { type: "check", color: "primary", defaultChecked: true }),
                    "Show Watermark"),
                React.createElement(Item, null,
                    React.createElement(Input, { type: "text", value: "{pair} - ZigZag ({interval})" })))),
        React.createElement(Item, null,
            React.createElement(ResetButton, { onClick: function () {
                    reset();
                } }, "Defaults"))));
};
export default BackgroundSettings;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
