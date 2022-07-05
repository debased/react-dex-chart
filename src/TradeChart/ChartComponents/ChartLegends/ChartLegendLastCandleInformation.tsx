import React from "react";
import styled from "styled-components";
const Legend = styled.div<{}>`
  display: flex;
  flex-direction: row;
  font-size: 12px;

  -webkit-touch-callout: none;/* iOS Safari */
  -webkit-user-select: none;  /* Safari */
  -khtml-user-select: none;   /* Konqueror HTML */
  -moz-user-select: none;     /* Old versions of Firefox */
  -ms-user-select: none;      /* Internet Explorer/Edge */
  user-select: none;          /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */

`;
const Option = styled.div<{}>`
  display: flex;
  flex-direction: row;

  font-size: 12px;
`;
const Type = styled.div<{}>`
  margin-left: 8px;
`;
const Value = styled.div<{positive: boolean | null | undefined}>`
  margin-left: 0px;
  color: ${({positive}) => {
    return positive === undefined ? '#85848A' : ( positive ? '#3EDD96' : '#A13245' )}
  };
  
`;

interface IProps {
  open: number | null | undefined,
  high: number | null | undefined,
  low: number | null | undefined,
  close: number | null | undefined,
  candleBefore: any,

}
export const ChartLegendLastCandleInformation = ({open, high, low, close, candleBefore}: IProps) => {
  return (
    <Legend>
      <Option>
        <Type>O</Type>
        <Value
          positive={open ? (candleBefore?.open < open) : undefined}
        >{open ? open : 'NaN'}</Value>
      </Option>

      <Option>
        <Type>H</Type>
        <Value
          positive={high ? (candleBefore?.high <= high) : undefined}
        >{high ? high : 'NaN'}</Value>
      </Option>

      <Option>
        <Type>L</Type>
        <Value
          positive={low ? (candleBefore?.low < low) : undefined}
        >{low ? low : 'NaN'}</Value>
      </Option>

      <Option>
        <Type>C</Type>
        <Value 
          positive={close ? (candleBefore?.close ? (candleBefore.close < close) : undefined) : undefined}
        >{close ? close : 'NaN'}</Value>
      </Option>
    </Legend>
    )
}