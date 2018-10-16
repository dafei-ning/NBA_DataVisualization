import React from 'react';
import {PROFILE_PIC_URL_PREFIX, TEAM_PIC_URL_PREFIX} from '../constants.js';
//import * as constants from '../constants.js';

export class Profile extends React.Component {

	render() {
		console.log(this.props.playerInfo);

		const {
			playerId,
			playerName,
			teamCity,
			teamName,
			teamAbbreviation,
			height,
			weight,
			pts,
			reb,
			ast,
			pie,

		} = this.props.playerInfo;

		return (
			<div className="profile">
			<div className="profile-entry player-name">{`${playerName}`}</div>

			<img
				className="profile-pic"
				src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
				alt="Profile"

			/>


			<div className="profile-entry">			
				<div className="profile-entry-left">Team</div>
				<div className="profile-entry-right">{`${teamCity} ${teamName}`}</div>
			</div>
			<img
                className="team-logo"
                src={`${TEAM_PIC_URL_PREFIX}/${teamAbbreviation}_logo.svg`}
                alt="Team"
            />

			<div className="profile-entry">			
				<div className="profile-entry-left">Height</div>
				<div className="profile-entry-right">{`${height}`}</div>
			</div>

			<div className="profile-entry">			
				<div className="profile-entry-left">Weight</div>
				<div className="profile-entry-right">{`${weight}`}</div>
			</div>

			<div className="profile-entry">			
				<div className="profile-entry-left">Pts</div>
				<div className="profile-entry-right">{`${pts}`}</div>
			</div>

			<div className="profile-entry">			
				<div className="profile-entry-left">Reb</div>
				<div className="profile-entry-right">{`${reb}`}</div>
			</div>

			<div className="profile-entry">			
				<div className="profile-entry-left">Ast</div>
				<div className="profile-entry-right">{`${ast}`}</div>
			</div>

			<div className="profile-entry">			
				<div className="profile-entry-left">Pie</div>
				<div className="profile-entry-right">{`${pie}`}</div>
			</div>



			</div>
		);
	}

}