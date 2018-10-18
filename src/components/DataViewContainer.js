import React from 'react';
import { Radio } from 'antd';
import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    render() {
        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={2}
                    chartType={"hexbin"}
                    displayToolTips={true}
                />
                <CountSlider />
                <RadioGroup onChange={this.onChange} value={1}>
                    <Radio value={1}>Hexbin</Radio>
                    <Radio value={2}>Scatter</Radio>
                  
                </RadioGroup>

            </div>
        );
    }
}
