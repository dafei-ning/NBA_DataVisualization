import React from 'react';
import { Radio, Switch } from 'antd';
import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {

    state = {
        chartType: 'hexbin',
        displayToolTips: true
    }

    onChartTypeChange = (e) => {
        console.log(e); // 值是储存e.target.value
        this.setState({
            chartType: e.target.value
        })

    }

    onTooltipChange =(displayToolTips) => {
        this.setState({
            displayToolTips
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
                <Switch 
                    checkedChildren="Show Position Data" 
                    unCheckedChildren="Only View Chart" 
                    defaultChecked 
                    onChange={this.displayToolTips} />

            </div>
        );
    }
}
