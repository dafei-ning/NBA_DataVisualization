import React from 'react';
import nba from 'nba';
import {Profile} from './Profile';
import {ShotChart} from './ShotChart';
import {DataViewContainer} from './DataViewContainer';

import {SearchBar} from './SearchBar';


window.nba = nba;

export class Main extends React.Component {


	// defualt state
	state = {
		playerInfo : {
			playerName: 'Stephen Curry',
			playerId: 201939
		}
	}


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