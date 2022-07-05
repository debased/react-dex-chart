import React from "react";
import styled from "styled-components";
import { ChartSettings } from "../../../types";

const Item = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
`;

const ResetButton = styled.div`
    margin: 12px;
    padding: 4px 12px;

    background: #3F51B5;
    border: 1px solid #3F51B5;
    border-radius: 2px;
    color: white;

    cursor: pointer;

    &:hover{
        background: #33439c;
    }
`;

interface IProps {
    settings: ChartSettings,
    updateSetting: Function
}
const TimezoneSettings = ({
    settings, updateSetting
}: IProps) => {
    return (
        <Items>
            {/* orders */}
            <Item>
                <input type="check" color="primary" 
                    onClick={() => updateSetting({timezone: { showSessions: !settings.timezone.showSessions}})}
                    checked={settings.timezone.showSessions}/>Show sessions
            </Item>
            <Item>
                <input type="check" color="primary" 
 defaultChecked />Timezone
            </Item>

            {/* reset */}
            <Item>
                <ResetButton>Defaults</ResetButton>
            </Item>
        </Items>
    );
}

export default TimezoneSettings;