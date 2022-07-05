var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var ChartDropdown = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    position: relative;\n\n"], ["\n    display: inline-block;\n    position: relative;\n\n"])));
export var ChartDropdownContent = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: ", ";\n    position: absolute;\n    background-color: #171C28;\n    border: 1px solid #0B121A;\n    border-radius: 8px;\n    min-width: 440px;\n    ", "\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,.4);\n    z-index: 5;\n    padding: 10px;\n\n    ", "\n"], ["\n    display: ", ";\n    position: absolute;\n    background-color: #171C28;\n    border: 1px solid #0B121A;\n    border-radius: 8px;\n    min-width: 440px;\n    ", "\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,.4);\n    z-index: 5;\n    padding: 10px;\n\n    ", "\n"])), function (_a) {
    var display = _a.display;
    return display ? 'inline-block' : 'none';
}, function (_a) {
    var width = _a.width;
    return width ? "width: ".concat(width, ";") : "";
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
export var ChartDropdownTitle = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-size: 16px;\n    font-weight: bold;\n"], ["\n    font-size: 16px;\n    font-weight: bold;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
