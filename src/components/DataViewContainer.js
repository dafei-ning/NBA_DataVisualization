import React from 'react';
import { Radio } from 'antd';
import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {

    state = {
        chartType: 'hexbin'
    }

    onChartTypeChange = (e) => {
        console.log(e); // 值是储存e.target.value
        this.setState({
            chartType: e.target.value
        })

    }

    render() {
        const { chartType } = this.state;
        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={2}
                    chartType={"hexbin"}
                    displayToolTips={true}
                />
                <CountSlider />
                <RadioGroup onChange={this.onChartTypeChange} value={chartType}>
                    <Radio value={1}>Hexbin</Radio>
                    <Radio value={2}>Scatter</Radio>
                  
                </RadioGroup>

            </div>
        );
    }
}
