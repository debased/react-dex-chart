var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { useRef, useState } from "react";
import styled from "styled-components";
import { useHandleClickOutside } from "../../utils/helpers";
import { ChartHeaderItem } from "../ChartHeader";
import { ChartDropdown, ChartDropdownContent } from "../ChartDropdown";
import React from "react";
var Interval = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    vertical-align: center;\n\n    margin: 2px 6px;\n    padding: 2px 6px;\n    color: '#ffff';\n    /*", "*/\n    ", "\n\n    .value {\n        \n    }\n\n    span {\n        margin-top: 4px;\n        padding: 6px 2px;\n        font-size: 14px;\n        font-weight: bold;\n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    vertical-align: center;\n\n    margin: 2px 6px;\n    padding: 2px 6px;\n    color: '#ffff';\n    /*", "*/\n    ", "\n\n    .value {\n        \n    }\n\n    span {\n        margin-top: 4px;\n        padding: 6px 2px;\n        font-size: 14px;\n        font-weight: bold;\n    }\n"])), function (_a) {
    var selected = _a.selected;
    return selected ? 'border: 1px solid rgba(250, 250, 250, .4);' : 'border: 1px solid rgba(0, 0, 0, 0);';
}, function (_a) {
    var selected = _a.selected;
    return selected ? 'color: white; font-weight: bold;' : '';
});
var IntervalSwitch = function (_a) {
    var interval = _a.interval, favourites = _a.favourites, addFavourite = _a.addFavourite, intervals = _a.intervals, setInterval = _a.setInterval;
    var ref = useRef();
    var _b = useState(false), show = _b[0], setShow = _b[1];
    useHandleClickOutside(ref, function () {
        setShow(false);
    });
    //filter out current selected
    var favouriteIntervals = favourites
        .filter(function (fav) { return fav.value !== interval; })
        .map(function (fav, key) {
        return (React.createElement(Interval, { key: key, selected: false },
            React.createElement("div", { onClick: function () {
                    //remove fav
                } }, "*"),
            React.createElement("div", { className: "value", onClick: function () {
                    setInterval(fav.value);
                } }, fav.string)));
    });
    var isFavourited = function (item) {
        var items = favourites.filter(function (i) { return i.value === item.value; });
        if (items.length)
            return true;
        return false;
    };
    return (React.createElement(ChartHeaderItem, { ref: ref },
        React.createElement("div", { onClick: function () { return setShow(!show); } },
            React.createElement("span", null, interval),
            "\uD83D\uDD3B"),
        React.createElement(ChartDropdown, null,
            React.createElement(ChartDropdownContent, { position: null, width: null, ref: null, display: show }, intervals.map(function (i, key) {
                //seperator
                if (i.value === undefined) {
                    return (React.createElement(Interval, { key: key, selected: false },
                        React.createElement("span", null, i.string),
                        "\uD83D\uDD3B"));
                }
                var favourited = isFavourited(i);
                return (React.createElement(Interval, { key: key, selected: i.value === interval },
                    React.createElement("div", { className: "value", onClick: function () {
                            setInterval(i.value);
                            setShow(false);
                        } }, i.string),
                    React.createElement("div", { onClick: function () {
                            addFavourite(i);
                        } }, favourited ? '⭐' : '☆')));
            }))),
        favouriteIntervals));
};
export default IntervalSwitch;
var templateObject_1;
