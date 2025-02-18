import React from "react";
interface IProps {
    onClick: Function;
    children: React.ReactNode;
}
declare const ChartHeaderItem: ({ onClick, children }: IProps) => React.JSX.Element;
export default ChartHeaderItem;
