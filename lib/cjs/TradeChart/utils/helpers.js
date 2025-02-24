"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondsToUTCTimestamp = exports.useHandleClickOutside = void 0;
var react_1 = require("react");
var useHandleClickOutside = function (ref, fnc) {
    (0, react_1.useEffect)(function () {
        if (ref === null)
            throw new TypeError("Reference not set");
        var mouseAway = function (e) {
            if (ref.current && !ref.current.contains(e.target)) {
                fnc();
            }
        };
        document.addEventListener('mousedown', mouseAway);
        return function () {
            document.removeEventListener('mousedown', mouseAway);
        };
    }, [ref]);
};
exports.useHandleClickOutside = useHandleClickOutside;
var secondsToUTCTimestamp = function (seconds) {
    return seconds;
};
exports.secondsToUTCTimestamp = secondsToUTCTimestamp;
