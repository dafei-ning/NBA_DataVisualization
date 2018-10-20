import React from 'react';
import nba from 'nba';
import {Profile} from './Profile';
import {ShotChart} from './ShotChart';
import {DataViewContainer} from './DataViewContainer';

import {SearchBar} from './SearchBar';
import { DEFAULT_PLAYER_INFO } from '../constants';


window.nba = nba;

export class Main extends React.Component {


	// defualt state
	state = {
		playerInfo: DEFAULT_PLAYER_INFO
	}
	/*
		1. target the state
		2. write the callback function where the state is 
		3. pass down callback function to children that need it using props
		4. in the children, use [this.props.<callback>(.....)] to execute the function
	*/


	loadPlayerInfo =(playerName) => {
		const playerId = nba.findPlayer(playerName).playerId;
		nba.stats.playerInfo({PlayerID: playerId}).then(
			(info) => {
				console.log(info);
				const playerInfo = { 
					...info.commonPlayerInfo[0], 
					...info.playerHeadlineStats[0] 
				};
				console.log(playerInfo);


				this.setState({
					playerInfo
				});
			}
		);
	}

	componentDidMount() {
		this.loadPlayerInfo(this.state.playerInfo.playerName);
	}
	/*
		  parent  -> state
		  /     \
  shotChart     slider

	*/

	render() {
		return (
			<div className="main">
				<SearchBar loadPlayerInfo={this.loadPlayerInfo} />
				<div className="player">
					<Profile playerInfo={this.state.playerInfo} />
					<DataViewContainer playerId={this.state.playerInfo.playerId}/>
				</div>
			</div>
		)
		
	}
}