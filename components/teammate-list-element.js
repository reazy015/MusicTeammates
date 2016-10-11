import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class TeammateListElement extends React.Component {
	constructor(props){
			super(props);

			this.teammateInviteShow = this.teammateInviteShow.bind(this);
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
							<a href={'/teammate-invite' + teammate.id}>
								<Button bsSize="xsmall">
								More info
								</Button>
							</a>
						</td>
						<td>
							<Button  bsSize="xsmall" data-id={teammate.id} data-name={teammate.first} onClick={this.teammateInviteShow}>Invite</Button>
						</td>
					</tr>
				
			);
	}

	// 

	teammateInviteShow(event)
		{
			const teammate_id = Number(event.target.dataset.id);
			const name = event.target.dataset.name;

				this.props.dispatch({
					type: "TEAMMATE_INVITE_SHOW",
					id: teammate_id,
					name: teammates.first,
				});
		}
}


export default connect()(TeammateListElement);