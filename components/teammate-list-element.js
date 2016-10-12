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
			const teammate_name = event.target.dataset.name;

			console.log(teammate_id, teammate_name);
		}
}


export default connect()(TeammateListElement);