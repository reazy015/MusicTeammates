import React from 'react';


export default class AddTeammate extends React.Component {
	render(){
		return(
				<div>
					<form>
						<label for="name">Name</label>
						<input id="name" type="text" ref="name" placeholder="enter your name"/>
						<label for="instrument">Instrument</label>
						<input id="instrument" type="text" ref="color" placeholder="instrument"/>
						<button type="submit">Add to list</button>
					</form>
				</div>
			);
	}
}