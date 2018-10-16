import React from 'react';

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
			<div className="profile">Profile</div>
		);
	}

}