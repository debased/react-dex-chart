/// <reference types="react" />
import { ChartSettings, UserFill, UserOrder } from './types';
import { ChartLayout } from './themes/chartTheme';
interface IProps {
    initialChartData: Array<any>;
    updateData: Array<any> | null;
    candleStickConfig: any;
    histogramConfig: any;
    chartLayout: ChartLayout;
    chartSetting: ChartSettings;
    marketAlias: string | undefined | null;
    orders: Array<UserOrder>;
    userFills: Array<UserFill>;
    legends: {
        items: Array<any>;
    };
}
export declare const ChartView: ({ initialChartData, updateData, candleStickConfig, histogramConfig, chartSetting, chartLayout, orders, userFills, marketAlias, legends }: IProps) => JSX.Element;
export {};
