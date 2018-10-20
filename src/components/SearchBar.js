import React from 'react';
import {AutoComplete} from 'antd';


function onSelect(value) {
	console.log('onSelect', value);
}

export class SearchBar extends React.Component {
	state = {
		dataSource: [],    //data source
	}

	handleSearch = (value) => {
		this.setState({
			dataSource: !value ? [] : [
				value,
				value + value,
				value + value + value,
			],
		});
	}

	render() {
		const { dataSource } = this.state;
		return (
			<AutoComplete
				dataSource={dataSource}
				style={{ width: 200 }}
				onSelect={onSelect}
				onSearch={this.handleSearch}
				placeholder="input here"
			/>
		);
	}
}