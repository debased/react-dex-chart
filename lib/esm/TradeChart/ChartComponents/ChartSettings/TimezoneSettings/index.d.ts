/// <reference types="react" />
import { ChartSettings } from "../../../types";
interface IProps {
    settings: ChartSettings;
    updateSetting: Function;
}
declare const TimezoneSettings: ({ settings, updateSetting }: IProps) => JSX.Element;
export default TimezoneSettings;
