import React from "react";
import styled from "styled-components";
import { ChartSettings, MarketInfo, TimeInterval } from "../../types.js";
import Settings from "../ChartSettings";
import IntervalSwitch from "../IntervalSwitch";

const ChartHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    flex-wrap: no-wrap;

`;

const ChartHeaderItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
    
    border-bottom: 1px solid rgba(250, 250, 250, .1);


`;
export const ChartHeaderItem = styled.div<{ref?: any}>`
    display: flex;
    flex-direction: row;

    flex-wrap: no-wrap;
    height: 39px;
    justify-content: space-between;
    align-items: center;

    padding: 8px 16px;

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

const ChartHeaderSymbol = styled.div`
    display: flex;
    flex-direction: column;

    font-size: 14px;
    font-weight: bold;
`;

interface IProps {
    marketInfo: MarketInfo,
    interval: string, setInterval: Function,
    intervals: Array<TimeInterval>,

    settings: ChartSettings, updateSetting: Function, reset: Function,
}

export const ChartHeader = ({
    marketInfo,
    interval, intervals, 
    setInterval,
    settings, updateSetting, reset
}: IProps) => {
    return ( 
        <ChartHeaderContainer>
            <ChartHeaderItems>
                <ChartHeaderContainer>
                    <ChartHeaderItem>
                        <img alt="" src={marketInfo?.image ? marketInfo.image : ''}/>
                        <ChartHeaderSymbol>
                            <span>{marketInfo.baseAsset.symbol}/{marketInfo.quoteAsset.symbol}</span>                            
                        </ChartHeaderSymbol>
                    </ChartHeaderItem>
                    <IntervalSwitch 
                        interval={interval} intervals={intervals} 
                        favourites={[]} addFavourite={(fav: any) => console.log(fav)}
                        setInterval={setInterval}
                    />
                </ChartHeaderContainer>
                <ChartHeaderContainer>
                    <Settings settings={settings} updateSetting={updateSetting} reset={reset}/>
                </ChartHeaderContainer>
            </ChartHeaderItems>
        </ChartHeaderContainer>
    );
}