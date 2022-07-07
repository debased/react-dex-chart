import styled from "styled-components";
import React from "react";
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
    updateSetting: Function,
    reset: Function
}

const TradingSettings = ({settings, updateSetting, reset}: IProps) => {

    return (
        <Items>
            {/* orders */}
            <Item>
                <input type="checkbox" color="primary" 
                    onChange={() => updateSetting({ section: 'trade', type: 'showOrders', value: !settings.trade.showOrders})}
                    checked={settings.trade.showOrders}/>Show Orders
            </Item>
            <Item>
                <input type="checkbox" color="primary" 
                    onChange={() => updateSetting({ section: 'trade', type: 'showExecutions', value: !settings.trade.showExecutions})}
                    checked={settings.trade.showExecutions} />Show Executions
            </Item>

            {/* lines */}
            <Item>
                <Items>
                    <Item>
                    <input type="checkbox" color="primary" 
                        onChange={() => updateSetting({ section: 'trade', type: 'extendLines', value: !settings.trade.extendLines})}
                        checked={settings.trade.extendLines} />Extend lines
                    </Item>
                </Items>
            </Item>

            {/* misc */}
            <Item>
                <input type="checkbox" color="primary" 
                    onChange={() => updateSetting({ section: 'trade', type: 'playSound', value: !settings.trade.playSound})}
                    checked={settings.trade.playSound} />Play sound on order execution
            </Item>

            {/* reset */}
            <Item>
                <ResetButton onClick={() => reset('trade')}>Defaults</ResetButton>
            </Item>
        </Items>
    );
}

export default TradingSettings;