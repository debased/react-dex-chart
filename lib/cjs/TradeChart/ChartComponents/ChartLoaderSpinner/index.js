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
var LoadingContainer = styled_components_1.default.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n"], ["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n"])));
var Loader = styled_components_1.default.section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nflex: 0 0 120px;\n"], ["\nflex: 0 0 120px;\n"])));
function ChartLoaderSpinner(_a) {
    var text = _a.text;
    return (react_1.default.createElement(LoadingContainer, null,
        react_1.default.createElement(Loader, null, text)));
}
exports.default = ChartLoaderSpinner;
var templateObject_1, templateObject_2;
