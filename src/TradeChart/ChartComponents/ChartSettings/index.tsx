import React from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import { useHandleClickOutside } from "../../utils/helpers";
import { ChartHeaderItem } from "../ChartHeader";
import { ChartDropdownContent } from "../ChartDropdown";
import TradingSettings from "./TradingSettings";
import TimezoneSettings from "./TimezoneSettings";
import BackgroundSettings from "./BackgroundSettings";
import Draggable from 'react-draggable'; // Both at the same time
import { ChartSettings } from "../../types";
import { Gear, XLg } from "react-bootstrap-icons";

const Settings = styled.div`
    min-width: 400px;

    font-size: 12px;
    h5 {
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
    }
`;
const SettingsHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 8px 8px;

    cursor: grab;

    -webkit-touch-callout:  none;
    -webkit-user-select:    none;
     -khtml-user-select:    none;
       -moz-user-select:    none;
        -ms-user-select:    none;
            user-select:    none;
`;
const HeaderItem = styled.div<{selected: boolean}>`
    flex: 1;
    padding: 8px 8px;

    text-transform: uppercase;
    text-align: center;

    ${({selected}) => selected ? `font-weight: bold;` : ''}
    
    border-left: 1px solid rgba(250, 250, 250, .1);

`;
const SettingsContent = styled.div`
    padding: 10px 5px;

    height: 200px;
    min-height: 300px;
    max-height: 300px;

    overflow: auto;
`;


const Tabs = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    margin: 8px 0px;
    margin-right: 20px;
    border: 1px solid rgba(250, 250, 250, .1);
`;

const SettingsExit = styled.div`
    margin-right: 4px;
`;

interface IProps {
    settings: ChartSettings,
    updateSetting: Function,
    reset: Function,
}
const ChartSettings = ({
    settings, updateSetting, reset
}: IProps) => {
    const ref = useRef();

    useHandleClickOutside(ref, () => {
        setShow(false);
    });

    const [show, setShow] = useState<boolean>(false);
    const [tab, setTab] = useState<string>("trading");

    const headerItems = [
        {title: 'trading', component: <TradingSettings settings={settings} updateSetting={updateSetting} reset={reset}/>},
        {title: 'background', component: <BackgroundSettings background={settings.background} settings={settings} updateSetting={updateSetting} reset={reset}/>},
        {title: 'timezone', component: <TimezoneSettings settings={settings} updateSetting={updateSetting} reset={reset}/>},
    ];

    const content = headerItems.filter((obj) => obj.title.toLowerCase() === tab.toLowerCase());

    return (
        <>
            <ChartHeaderItem onClick={() => setShow(true)} >
                <Gear/>
            </ChartHeaderItem>
             {/* dropdown */}
            <Draggable bounds="body" handle="span" >
                <ChartDropdownContent display={show} position="center" ref={ref}>
                    <Settings>
                        <span>
                            <SettingsHeader >
                                <h5>Trading Settings</h5>

                                <SettingsExit onClick={(e) => {
                                    e.preventDefault();
                                    setShow(!show);
                                }} >
                                    <XLg size={22}/>
                                </SettingsExit>
                            </SettingsHeader>
                        </span>
                            <Tabs>
                                {headerItems.map((item, key) => (
                                    <HeaderItem key={key}
                                        selected={tab === item.title}
                                        onClick={() => setTab(item.title)}>
                                        {item.title}
                                    </HeaderItem>
                                ))}
                            </Tabs>

                        <SettingsContent>{content[0].component}</SettingsContent>
                    </Settings>
                </ChartDropdownContent>
            </Draggable>
        </>
    );
}
export default ChartSettings;