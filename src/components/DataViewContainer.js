import React from 'react';
import { Radio, Switch, Row, Col } from 'antd';
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
        const { chartType, displayToolTips } = this.state;
        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={2}
                    chartType={chartType}
                    displayToolTips={displayToolTips}
                />
                <CountSlider />

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
