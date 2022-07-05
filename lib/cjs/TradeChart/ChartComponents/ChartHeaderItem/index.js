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
var react_1 = require("react");
var helpers_1 = require("../../utils/helpers");
var react_2 = __importDefault(require("react"));
var HeaderItem = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n\n    flex-wrap: no-wrap;\n\n    padding: 8px 16px;\n    min-width: 100px;\n\n    justify-content: space-between;\n    align-items: center;\n\n    border-left: 1px solid rgba(250, 250, 250, .1);\n\n    -webkit-touch-callout: none;/* iOS Safari */\n    -webkit-user-select: none;  /* Safari */\n    -khtml-user-select: none;   /* Konqueror HTML */\n    -moz-user-select: none;     /* Old versions of Firefox */\n    -ms-user-select: none;      /* Internet Explorer/Edge */\n    user-select: none;          /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n\n    img {\n        height: 18px;\n        margin: 4px;\n        margin-right: 10px;\n\n        \n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n\n    flex-wrap: no-wrap;\n\n    padding: 8px 16px;\n    min-width: 100px;\n\n    justify-content: space-between;\n    align-items: center;\n\n    border-left: 1px solid rgba(250, 250, 250, .1);\n\n    -webkit-touch-callout: none;/* iOS Safari */\n    -webkit-user-select: none;  /* Safari */\n    -khtml-user-select: none;   /* Konqueror HTML */\n    -moz-user-select: none;     /* Old versions of Firefox */\n    -ms-user-select: none;      /* Internet Explorer/Edge */\n    user-select: none;          /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n\n    img {\n        height: 18px;\n        margin: 4px;\n        margin-right: 10px;\n\n        \n    }\n"])));
var ChartHeaderItem = function (_a) {
    var onClick = _a.onClick, children = _a.children;
    //hide on click away
    var ref = (0, react_1.useRef)();
    (0, helpers_1.useHandleClickOutside)(ref, onClick(false));
    return (react_2.default.createElement(HeaderItem, { ref: ref, onClick: onClick }, children));
};
exports.default = ChartHeaderItem;
var templateObject_1;
