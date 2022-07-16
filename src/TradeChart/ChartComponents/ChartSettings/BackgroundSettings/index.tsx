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
                    <input type="checkbox" color="primary" 
                    onClick={() => updateSetting({ section: 'background', type: 'gradient', value: !settings.background.gradient})}
                    defaultChecked={settings.background.gradient} />Background gradient
                </Item>
                <Items>
                    <Item>
                        <div style={{
                           width: '100%',
                           height: '100%',
                           margin: '20px',
                           padding: '4px',
                           background: color ? `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` : 'rgba(0, 0, 0, 1)',
                        }}>Color</div>
                    </Item>
                    <Item><RgbaColorPicker color={color ? color : {r: 0, g: 0, b: 0, a: 1}} onChange={(color) => {
                        updateSetting({section: 'background', type: 'color', value: color});
                    }} /></Item>
                </Items>
            </Items>
            <Item>
                <Items>
                    V1
                    <Item>
                        <input type="checkbox" color="primary" 
                        onClick={() => updateSetting({ section: 'background', type: 'watermark', value: !settings.background.watermark})}
                        defaultChecked={settings.background.watermark}/>Show Watermark
                    </Item>
                    <Item>
                        <Input type="text" 
                        onChange={(e) => {
                            updateSetting({
                                section: 'background',
                                type: 'watermarkText',
                                value: e.target.value,
                            })
                        }}
                        defaultValue={settings.background.watermarkText}/>
                    </Item>
                </Items>


            </Item>

            {/* reset */}
            <Item>
                <ResetButton
                 onClick={() => reset('background')}>Defaults</ResetButton>
            </Item>
        </Items>
    );
}

export default BackgroundSettings;