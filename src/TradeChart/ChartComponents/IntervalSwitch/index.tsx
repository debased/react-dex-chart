import { useRef, useState } from "react";
import styled from "styled-components";
import { useHandleClickOutside } from "../../utils/helpers";
import { ChartHeaderItem } from "../ChartHeader";
import { ChartDropdown, ChartDropdownContent } from "../ChartDropdown";
import { TimeInterval } from "../../types";
import React from "react";

const Interval = styled.div<{selected: boolean | undefined | null}>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    vertical-align: center;

    margin: 2px 6px;
    padding: 2px 6px;
    color: '#ffff';
    /*${({selected}) => selected ? 'border: 1px solid rgba(250, 250, 250, .4);' : 'border: 1px solid rgba(0, 0, 0, 0);'}*/
    ${({selected}) => selected ? 'color: white; font-weight: bold;' : ''}

    .value {
        
    }

    span {
        margin-top: 4px;
        padding: 6px 2px;
        font-size: 14px;
        font-weight: bold;
    }
`;

const IntervalSwitch = ({interval, favourites, addFavourite, intervals, setInterval}: {
    interval: string,
    favourites: Array<any>, addFavourite: Function,
    intervals: Array<TimeInterval>,
    setInterval: Function,
}) => {
    const ref = useRef();

    const [show, setShow] = useState(false);

    useHandleClickOutside(ref, () => {
        setShow(false);
    });

    //filter out current selected
    const favouriteIntervals = favourites
    .filter((fav) => fav.value !== interval)
    .map((fav, key) => {
        return (
            <Interval key={key} selected={false}>
                <div onClick={() => {
                    //remove fav
                }}>
                    *
                </div>
                
                <div className="value"
                    onClick={() => {
                    setInterval(fav.value);
                }}>
                    {fav.string}
                </div>
            </Interval>
        )
    });

    const isFavourited = (item: any) => {
        let items = favourites.filter((i) => i.value === item.value);
        if(items.length) return true;
        return false;
    }

    return (
        <ChartHeaderItem ref={ref}>
            <div  onClick={() => setShow(!show)}>
                {/* current interval */}
                <span>{interval}</span>
                🔻
            </div>
            {/* dropdown */}
            <ChartDropdown>
                <ChartDropdownContent position={null} width={null} ref={null} display={show}>

                    {intervals.map((i, key) => {
                        //seperator
                        if(i.value === undefined){
                            return (
                                <Interval key={key} selected={false}>
                                    <span>{i.string}</span>
                                    🔻
                                </Interval>
                            )
                        }
                        const favourited = isFavourited(i);
                        return (
                            <Interval key={key} 
                                selected={i.value === interval}
                            >
                                <div className="value"
                                    onClick={() => {
                                    setInterval(i.value);
                                    setShow(false);
                                }}>
                                    {i.string}
                                </div>
                                <div onClick={() => {
                                    addFavourite(i)
                                }}>
                                    {favourited ? '⭐' : '☆' }
                                </div>
                            </Interval>
                        )
                    })}
                </ChartDropdownContent>
            </ChartDropdown>

            {/* favourite intervals */}
            {favouriteIntervals}
        </ChartHeaderItem>
    );
}
export default IntervalSwitch;