/// <reference types="react" />
import { ChartSettings } from "../../../types";
interface IProps {
    settings: ChartSettings;
    updateSetting: Function;
    reset: Function;
}
declare const TimezoneSettings: ({ settings, updateSetting, reset }: IProps) => JSX.Element;
export default TimezoneSettings;
