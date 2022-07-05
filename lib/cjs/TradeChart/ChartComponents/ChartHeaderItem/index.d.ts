import React from "react";
interface IProps {
    onClick: Function;
    children: React.ReactNode;
}
declare const ChartHeaderItem: ({ onClick, children }: IProps) => JSX.Element;
export default ChartHeaderItem;
