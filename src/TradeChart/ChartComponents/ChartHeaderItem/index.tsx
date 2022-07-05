import styled from "styled-components";
import { useRef } from "react";
import { useHandleClickOutside } from "../../utils/helpers";
import React from "react";

const HeaderItem = styled.div<{ref: any, onClick: any}>`
    display: flex;
    flex-direction: row;

    flex-wrap: no-wrap;

    padding: 8px 16px;
    min-width: 100px;

    justify-content: space-between;
    align-items: center;

    border-left: 1px solid rgba(250, 250, 250, .1);

    -webkit-touch-callout: none;/* iOS Safari */
    -webkit-user-select: none;  /* Safari */
    -khtml-user-select: none;   /* Konqueror HTML */
    -moz-user-select: none;     /* Old versions of Firefox */
    -ms-user-select: none;      /* Internet Explorer/Edge */
    user-select: none;          /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

    img {
        height: 18px;
        margin: 4px;
        margin-right: 10px;

        
    }
`;
interface IProps {
    onClick: Function,
    children: React.ReactNode
}
const ChartHeaderItem = ({onClick, children}: IProps) => {
    //hide on click away
    const ref = useRef();
    useHandleClickOutside(ref, onClick(false))

    return (
        <HeaderItem ref={ref} onClick={onClick}>
            {children}
        </HeaderItem>
    )
}
export default ChartHeaderItem;