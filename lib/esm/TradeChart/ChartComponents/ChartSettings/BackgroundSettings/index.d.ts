import React from "react";
import { ChartBackground, ChartSettings } from "../../../types";
interface IProps {
    background: ChartBackground;
    settings: ChartSettings;
    updateSetting: Function;
    reset: Function;
}
declare const BackgroundSettings: ({ background, settings, updateSetting, reset }: IProps) => React.JSX.Element;
export default BackgroundSettings;
