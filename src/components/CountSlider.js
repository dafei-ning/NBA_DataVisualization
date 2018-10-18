import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export class CountSlider extends React.Component {
	state = {
		inputValue: 2,
	}

	onChange = (value) => {
		// 保证传进来的数是数字，Number() function 天王盖地虎
		const cleanValue = Number(value) ? value : this.state.inputValue;
		this.setState({
			inputValue: cleanValue,
		});
		this.props.onChange(cleanValue); // 等效于执行dataView里面额onCountSliderChange
	}

	render() {
		const { inputValue } = this.state;
		return (
			// row 和 col主要就是让你来画出平行的格式
			<Row>
				<Col span={12} offset={4}>
					<Slider
						min={2}
						max={20}
						onChange={this.onChange}
						value={typeof inputValue === 'number' ? inputValue : 0}
					/>
				</Col>
				<Col span={4}>
					<InputNumber
						min={2}
						max={20}
						style={{ marginLeft: 16 }}
						value={inputValue}
						onChange={this.onChange}
					/>
				</Col>
			</Row>
		);
	}
}