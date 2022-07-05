var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
var Item = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n"], ["\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n"])));
var Items = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n"], ["\n    display: flex;\n    flex-direction: column;\n"])));
var ResetButton = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    margin: 12px;\n    padding: 4px 12px;\n\n    background: #3F51B5;\n    border: 1px solid #3F51B5;\n    border-radius: 2px;\n    color: white;\n\n    cursor: pointer;\n\n    &:hover{\n        background: #33439c;\n    }\n"], ["\n    margin: 12px;\n    padding: 4px 12px;\n\n    background: #3F51B5;\n    border: 1px solid #3F51B5;\n    border-radius: 2px;\n    color: white;\n\n    cursor: pointer;\n\n    &:hover{\n        background: #33439c;\n    }\n"])));
var TimezoneSettings = function (_a) {
    var settings = _a.settings, updateSetting = _a.updateSetting;
    return (React.createElement(Items, null,
        React.createElement(Item, null,
            React.createElement("input", { type: "check", color: "primary", onClick: function () { return updateSetting({ timezone: { showSessions: !settings.timezone.showSessions } }); }, checked: settings.timezone.showSessions }),
            "Show sessions"),
        React.createElement(Item, null,
            React.createElement("input", { type: "check", color: "primary", defaultChecked: true }),
            "Timezone"),
        React.createElement(Item, null,
            React.createElement(ResetButton, null, "Defaults"))));
};
export default TimezoneSettings;
var templateObject_1, templateObject_2, templateObject_3;
