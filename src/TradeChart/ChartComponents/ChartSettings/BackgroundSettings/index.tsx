import React from "react";
import styled from "styled-components";
import { RgbaColorPicker } from "react-colorful";
import { ChartBackground, ChartSettings } from "../../../types";

const Item = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    margin: 12px;
    padding: 3px 8px;

    background: #3F51B5;
    border: 1px solid #3F51B5;
    color: white;

    width: 100%;
    height: 20px;
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
    background: ChartBackground,
    settings: ChartSettings,
    updateSetting: Function,
    reset: Function

}

const BackgroundSettings = ({
    background, settings, updateSetting, reset
}: IProps) => {
    const color = background.color;

    return (
        <Items>
            {/* orders */}
            <Items>
                <Item>
                    <input type="check" color="primary" 
                    onChange={() => updateSetting({ type: 'gradient', value: !settings.background.gradiant})}
                    checked={settings.background.gradiant} />Background gradient
                </Item>
                <Items>
                    <Item>
                        <div style={{
                           width: '100%',
                           height: '100%',
                           margin: '20px',
                           padding: '4px',
                           background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                        }}>Color</div>
                    </Item>
                    <Item><RgbaColorPicker color={color} onChange={(color) => {
                        updateSetting({type: 'color', value: color});
                    }} /></Item>
                </Items>
            </Items>
            <Item>
                <Items>
                    <Item>
                        <input type="check" color="primary" defaultChecked />Show Watermark
                    </Item>
                    <Item>
                        <Input type="text" value="{pair} - ZigZag ({interval})"/>
                    </Item>
                </Items>


            </Item>

            {/* reset */}
            <Item>
                <ResetButton
                 onClick={() => {
                    reset()
                }}>Defaults</ResetButton>
            </Item>
        </Items>
    );
}

export default BackgroundSettings;