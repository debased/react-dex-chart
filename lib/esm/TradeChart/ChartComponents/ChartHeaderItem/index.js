var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { useRef } from "react";
import { useHandleClickOutside } from "../../utils/helpers";
import React from "react";
var HeaderItem = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n\n    flex-wrap: no-wrap;\n\n    padding: 8px 16px;\n    min-width: 100px;\n\n    justify-content: space-between;\n    align-items: center;\n\n    border-left: 1px solid rgba(250, 250, 250, .1);\n\n    -webkit-touch-callout: none;/* iOS Safari */\n    -webkit-user-select: none;  /* Safari */\n    -khtml-user-select: none;   /* Konqueror HTML */\n    -moz-user-select: none;     /* Old versions of Firefox */\n    -ms-user-select: none;      /* Internet Explorer/Edge */\n    user-select: none;          /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n\n    img {\n        height: 18px;\n        margin: 4px;\n        margin-right: 10px;\n\n        \n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n\n    flex-wrap: no-wrap;\n\n    padding: 8px 16px;\n    min-width: 100px;\n\n    justify-content: space-between;\n    align-items: center;\n\n    border-left: 1px solid rgba(250, 250, 250, .1);\n\n    -webkit-touch-callout: none;/* iOS Safari */\n    -webkit-user-select: none;  /* Safari */\n    -khtml-user-select: none;   /* Konqueror HTML */\n    -moz-user-select: none;     /* Old versions of Firefox */\n    -ms-user-select: none;      /* Internet Explorer/Edge */\n    user-select: none;          /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n\n    img {\n        height: 18px;\n        margin: 4px;\n        margin-right: 10px;\n\n        \n    }\n"])));
var ChartHeaderItem = function (_a) {
    var onClick = _a.onClick, children = _a.children;
    //hide on click away
    var ref = useRef();
    useHandleClickOutside(ref, onClick(false));
    return (React.createElement(HeaderItem, { ref: ref, onClick: onClick }, children));
};
export default ChartHeaderItem;
var templateObject_1;
