import React from 'react';
import { Radio, Switch, Row, Col } from 'antd';
import _ from 'lodash';
import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {

    state = {
        minCount: 2,
        chartType: 'hexbin',
        displayToolTips: true
    }


    onCountSliderChange = (minCount) => {
        this.setState({
            minCount
        })
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
        const { minCount, chartType, displayToolTips } = this.state;
        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={minCount}
                    chartType={chartType}
                    displayToolTips={displayToolTips}
                />
                {
                    chartType === "hexbin" ?
                    <CountSlider 
                        value={minCount}
                        onChange = {_.debounce(this.onCountSliderChange, 500)} // 0.5s 以内不再有新的call就会call function
                    /> : null
                }

                <Row>
                    <Col span={8} offset={7}>
                        <RadioGroup onChange={this.onChartTypeChange} value={chartType}>
                            <Radio value={"hexbin"}>Hexbin</Radio>
                            <Radio value={"scatter"}>Scatter</Radio>           
                        </RadioGroup>
                    </Col>
                    <Col span={2}>
                        <Switch 
                        checkedChildren="Show Position Data" 
                        unCheckedChildren="Only View Chart" 
                        defaultChecked 
                        onChange={this.displayToolTips} />
                    </Col>
                </Row>


            </div>
        );
    }
}
