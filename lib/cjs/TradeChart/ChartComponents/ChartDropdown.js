"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartDropdownTitle = exports.ChartDropdownContent = exports.ChartDropdown = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.ChartDropdown = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    position: relative;\n\n"], ["\n    display: inline-block;\n    position: relative;\n\n"])));
exports.ChartDropdownContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;    \n    display: ", ";\n    ", "\n    \n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: 8px;\n    min-width: 440px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,.4);\n    z-index: 5;\n    padding: 10px;\n\n    ", "\n"], ["\n    position: absolute;    \n    display: ", ";\n    ", "\n    \n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: 8px;\n    min-width: 440px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,.4);\n    z-index: 5;\n    padding: 10px;\n\n    ", "\n"])), function (_a) {
    var display = _a.display;
    return display ? 'inline-block' : 'none';
}, function (_a) {
    var width = _a.width;
    return width ? "width: ".concat(width, ";") : "";
}, function (_a) {
    var theme = _a.theme;
    return theme.layout.backgroundColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.grid.vertLines.color;
}, function (_a) {
    var position = _a.position;
    var style = "";
    if (!position)
        return style;
    switch (position.toLowerCase()) {
        case "center":
            style = "right: 50%; left: 50%;";
            break;
        case "right":
            style = "left: 50%;";
            break;
        case "left":
            style = "right: 50%;";
            break;
        default:
            break;
    }
    return style;
});
exports.ChartDropdownTitle = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-size: 16px;\n    font-weight: bold;\n"], ["\n    font-size: 16px;\n    font-weight: bold;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
