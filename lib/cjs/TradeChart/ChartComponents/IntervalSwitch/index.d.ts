import { TimeInterval } from "../../types";
import React from "react";
declare const IntervalSwitch: ({ interval, favourites, addFavourite, intervals, setInterval }: {
    interval: string;
    favourites: Array<any>;
    addFavourite: Function;
    intervals: Array<TimeInterval>;
    setInterval: Function;
}) => React.JSX.Element;
export default IntervalSwitch;
