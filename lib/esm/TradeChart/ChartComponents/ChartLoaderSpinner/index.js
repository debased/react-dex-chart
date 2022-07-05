var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
var LoadingContainer = styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n"], ["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n"])));
var Loader = styled.section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nflex: 0 0 120px;\n"], ["\nflex: 0 0 120px;\n"])));
export default function ChartLoaderSpinner(_a) {
    var text = _a.text;
    return (React.createElement(LoadingContainer, null,
        React.createElement(Loader, null, text)));
}
var templateObject_1, templateObject_2;
