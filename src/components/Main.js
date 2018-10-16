import React from 'react';
import {Profile} from './Profile';

export class Main extends React.Component {
	render() {
		return (
			<div className="main">
				<Profile />
				<div>ShotChart</div>
			</div>
		)
		
	}
}