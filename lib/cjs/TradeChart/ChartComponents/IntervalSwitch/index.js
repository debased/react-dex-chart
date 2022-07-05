"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var helpers_1 = require("../../utils/helpers");
var ChartHeader_1 = require("../ChartHeader");
var ChartDropdown_1 = require("../ChartDropdown");
var react_2 = __importDefault(require("react"));
var Interval = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    vertical-align: center;\n\n    margin: 2px 6px;\n    padding: 2px 6px;\n    color: '#ffff';\n    /*", "*/\n    ", "\n\n    .value {\n        \n    }\n\n    span {\n        margin-top: 4px;\n        padding: 6px 2px;\n        font-size: 14px;\n        font-weight: bold;\n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    vertical-align: center;\n\n    margin: 2px 6px;\n    padding: 2px 6px;\n    color: '#ffff';\n    /*", "*/\n    ", "\n\n    .value {\n        \n    }\n\n    span {\n        margin-top: 4px;\n        padding: 6px 2px;\n        font-size: 14px;\n        font-weight: bold;\n    }\n"])), function (_a) {
    var selected = _a.selected;
    return selected ? 'border: 1px solid rgba(250, 250, 250, .4);' : 'border: 1px solid rgba(0, 0, 0, 0);';
}, function (_a) {
    var selected = _a.selected;
    return selected ? 'color: white; font-weight: bold;' : '';
});
var IntervalSwitch = function (_a) {
    var interval = _a.interval, favourites = _a.favourites, addFavourite = _a.addFavourite, intervals = _a.intervals, setInterval = _a.setInterval;
    var ref = (0, react_1.useRef)();
    var _b = (0, react_1.useState)(false), show = _b[0], setShow = _b[1];
    (0, helpers_1.useHandleClickOutside)(ref, function () {
        setShow(false);
    });
    //filter out current selected
    var favouriteIntervals = favourites
        .filter(function (fav) { return fav.value !== interval; })
        .map(function (fav, key) {
        return (react_2.default.createElement(Interval, { key: key, selected: false },
            react_2.default.createElement("div", { onClick: function () {
                    //remove fav
                } }, "*"),
            react_2.default.createElement("div", { className: "value", onClick: function () {
                    setInterval(fav.value);
                } }, fav.string)));
    });
    var isFavourited = function (item) {
        var items = favourites.filter(function (i) { return i.value === item.value; });
        if (items.length)
            return true;
        return false;
    };
    return (react_2.default.createElement(ChartHeader_1.ChartHeaderItem, { ref: ref },
        react_2.default.createElement("div", { onClick: function () { return setShow(!show); } },
            react_2.default.createElement("span", null, interval),
            "\uD83D\uDD3B"),
        react_2.default.createElement(ChartDropdown_1.ChartDropdown, null,
            react_2.default.createElement(ChartDropdown_1.ChartDropdownContent, { position: null, width: null, ref: null, display: show }, intervals.map(function (i, key) {
                //seperator
                if (i.value === undefined) {
                    return (react_2.default.createElement(Interval, { key: key, selected: false },
                        react_2.default.createElement("span", null, i.string),
                        "\uD83D\uDD3B"));
                }
                var favourited = isFavourited(i);
                return (react_2.default.createElement(Interval, { key: key, selected: i.value === interval },
                    react_2.default.createElement("div", { className: "value", onClick: function () {
                            setInterval(i.value);
                            setShow(false);
                        } }, i.string),
                    react_2.default.createElement("div", { onClick: function () {
                            addFavourite(i);
                        } }, favourited ? '⭐' : '☆')));
            }))),
        favouriteIntervals));
};
exports.default = IntervalSwitch;
var templateObject_1;
