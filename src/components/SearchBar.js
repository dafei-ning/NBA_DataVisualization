import React from 'react';
import {AutoComplete, Icon, Input} from 'antd';


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
				className="search-Bar"
				dataSource={dataSource}
			
				size="large"
				onSelect={onSelect}
				onSearch={this.handleSearch}
				placeholder="Search NBA player"
			>
				<Input suffix={<Icon type="search"/>} />
      		</AutoComplete>
		);
	}
}