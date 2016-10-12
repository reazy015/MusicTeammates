import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';


class TeammateInvite extends React.Component {
	render(){

		return(
				<Modal>
					<Modal.Header show={this.props.modal_invite.show}>
						<Modal.Title>
							Send Invite to <strong>{this.props.modal_invite.name}</strong> TeamMate?
						</Modal.Title>
					</Modal.Header>
					<Modal.Footer>
						<Button>No</Button>
						<Button bsStyle="primary">Yes</Button>
					</Modal.Footer>
				</Modal>
			);
	}
}

function mapStateToProps(state) {
	let modal_invite;
	if (state.teammates.modal && state.teammates.modal.list_invite) {
		modal_invite = state.teammates.modal.list_invite;
	} else {
		modal_invite = {
			show: false,
			id: 0,
			name: '',
		}
	}
	return {
		modal_invite: modal_invite,
	}
}

export default connect(mapStateToProps)(TeammateInvite);