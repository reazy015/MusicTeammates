import React, { Component } from 'react';
import { connect } from 'react-redux';

class TeammateDetail extends React.Component {
	render(){
		if(!this.props.teammate) {
			return(<h2>Here you can see additional info...click more info button</h2>);
		}
		return(
				<div>
					<img src={this.props.teammate.thumbnail} />
					<h2>Full name: {this.props.teammate.first} {this.props.teammate.last}</h2>
					<h3>Instrument: {this.props.teammate.instrument}</h3>
					<h3>City: {this.props.teammate.city}</h3>
				</div>
			)
	}
}

function mapStateToProps(state){
	return {
		teammate: state.activeTeammate
	}
}

export default connect(mapStateToProps)(TeammateDetail);