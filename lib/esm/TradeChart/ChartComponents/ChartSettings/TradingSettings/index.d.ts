/// <reference types="react" />
import { ChartSettings } from "../../../types";
interface IProps {
    settings: ChartSettings;
    updateSetting: Function;
    reset: Function;
}
declare const TradingSettings: ({ settings, updateSetting, reset }: IProps) => JSX.Element;
export default TradingSettings;
