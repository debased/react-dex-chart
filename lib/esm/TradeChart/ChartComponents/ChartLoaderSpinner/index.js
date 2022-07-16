var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
var LoadingContainer = styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\n\nalign-items: center;\nvertical-align: center;\n"], ["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\n\nalign-items: center;\nvertical-align: center;\n"])));
var Loader = styled.section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nborder: 10px solid rgba(13,109,168,255);\nborder-top: 10px solid #063970;\nborder-radius: 50%;\nwidth: 50px;\nheight: 50px;\nanimation: spin 2s linear infinite;\n\n@keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  } \n"], ["\nborder: 10px solid rgba(13,109,168,255);\nborder-top: 10px solid #063970;\nborder-radius: 50%;\nwidth: 50px;\nheight: 50px;\nanimation: spin 2s linear infinite;\n\n@keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  } \n"])));
export default function ChartLoaderSpinner(_a) {
    var text = _a.text;
    return (React.createElement(LoadingContainer, null,
        React.createElement(Loader, null),
        text));
}
var templateObject_1, templateObject_2;
