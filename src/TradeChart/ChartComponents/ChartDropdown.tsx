import styled from "styled-components";

export const ChartDropdown = styled.div`
    display: inline-block;
    position: relative;

`;


export const ChartDropdownContent = styled.div<{
    display: boolean | null | undefined, 
    ref?: any | null | undefined, 
    width?: number | null | undefined
    position?: string  | null | undefined
}>`
    position: absolute;    
    display: ${({display}) => display ? 'inline-block' : 'none'};
    ${({width}) => width ? `width: ${width};` : ``}
    
    background-color: ${({theme}) => theme.layout.backgroundColor};
    border: 1px solid ${({theme}) => theme.grid.vertLines.color};
    border-radius: 8px;
    min-width: 440px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,.4);
    z-index: 5;
    padding: 10px;

    ${({position}) => {
        let style = ``;
        if(!position) return style;

        switch (position.toLowerCase()) {
            case "center":
                style = `right: 50%; left: 50%;`;
                break;
            case "right":
                style = `left: 50%;`;
                break;
            case "left":
                style = `right: 50%;`;
                break;
            default:
                break;
        }
        return style;
    }}
`;

export const ChartDropdownTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
`;
