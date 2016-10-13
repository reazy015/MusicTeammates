import React from 'react';
import { connect } from 'react-redux';

class TeammateInvite extends React.Component {
	render(){
		if(!this.props.inviteTeammate) {
			return(<div></div>);
		}
		return(
				<div>					
					<h2>The Invitation has been sent to {this.props.inviteTeammate.first} {this.props.inviteTeammate.last} from {this.props.inviteTeammate.city}</h2>					
				</div>
			)
	}
}

function mapStateToProps(state){
	return {
		inviteTeammate: state.inviteTeammate
	}
}

export default connect(mapStateToProps)(TeammateInvite);