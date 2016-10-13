import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';


class TeammateListElement extends React.Component {
	constructor(props){
		super(props);

		this.showTeammateInfo = this.showTeammateInfo.bind(this);
		this.inviteTeammate = this.inviteTeammate.bind(this);
	}

	render(){
		
		const teammate = this.props.teammate;

		
		return(
				
					<tr key={teammate.id}>
						<td>#{teammate.id}</td>
						<td>{teammate.first}</td>
						<td>{teammate.instrument}</td>
						<td>{teammate.city}</td>
						<td>							
							<Button bsSize='xsmall' data-id={teammate.id} data-name={teammate.first} onClick={this.showTeammateInfo}>
								More info
							</Button>							
						</td>
						<td>
							<Button  bsSize='xsmall' data-id={teammate.id} data-name={teammate.first} onClick={this.inviteTeammate}>Invite</Button>
						</td>
					</tr>
				
			);
	}

	showTeammateInfo(event){

		this.props.dispatch({
		type: "SHOW_TEAMMATE_INFO",
		payload: this.props.teammate,

		});
	}

	inviteTeammate(event){
		const teammate_id = Number(event.target.dataset.id);
		const teammate_name = event.target.dataset.name;

		console.log(teammate_id, teammate_name);

		this.props.dispatch({
			type: "SEND_TEAMMATE_INVITE",
			payload: this.props.teammate,

		});
	}
}



export default connect()(TeammateListElement);