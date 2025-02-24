import { useEffect } from "react";
export var useHandleClickOutside = function (ref, fnc) {
    useEffect(function () {
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
export var secondsToUTCTimestamp = function (seconds) {
    return seconds;
};
