/// <reference types="react" />
import { TimeInterval } from "../../types";
declare const IntervalSwitch: ({ interval, favourites, addFavourite, intervals, setInterval }: {
    interval: string;
    favourites: Array<any>;
    addFavourite: Function;
    intervals: Array<TimeInterval>;
    setInterval: Function;
}) => JSX.Element;
export default IntervalSwitch;
