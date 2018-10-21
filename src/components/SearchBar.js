import React from 'react';
import nba from 'nba';
import {AutoComplete, Icon, Input} from 'antd';
import { PROFILE_PIC_URL_PREFIX } from '../constants';
import { AutoComplete2 } from './AutoComplete2';


const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
	state = {
		dataSource: [],    //data source
	}

	onSelect = (value) => {
       console.log('onSelect', value);
       this.props.loadPlayerInfo(value);
   }

	handleSearch = (value) => {
		
		this.setState({
			dataSource: !value ? [] : nba.searchPlayers(value).map(({fullName, playerId}) =>
				<Option key={playerId} value={fullName}>
					<img
					className="player-option-pic"
					src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
					alt="Profile"
					/>
					<span className="player-option-label">{fullName}</span>
				</Option>
			)
		});
	}

	render() {
		const { dataSource } = this.state;
		return (
			<AutoComplete
				className="search-Bar"
				dataSource={dataSource}
				
				size="large"
				onSelect={this.onSelect}
				onSearch={this.handleSearch}
				placeholder="Search NBA player"
				optionLabelProp="value"
			>
				<Input suffix={<Icon type="search"/>} />
			</AutoComplete>
		);
	}
}