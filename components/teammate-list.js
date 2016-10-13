import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';


import TeammateListElement from './teammate-list-element';
import TeammateDetail from './teammate-detail';
import TeammateInvite from './teammate-invite';


class TeammateList extends React.Component {
	render(){
		return(
			<div>
				<div>
					<Table bordered hover responsive striped>
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Instrument</th>
								<th>City</th>
								<th>About</th>
								<th>Invite</th>
							</tr>
						</thead>
						<tbody>
							{this.props.initialUsers.map((teammate, index) => {
								return (
										<TeammateListElement key={teammate.id} teammate={teammate}/>
									)
							})}
						</tbody>
					</Table>									
				</div>
				<div>
				<TeammateDetail />
				<TeammateInvite />	
				</div>
			</div>

			)
	}
}

function mapStateToProps(state){
	return {
		initialUsers: state.inititalUsers,
	}
}

export default connect(mapStateToProps)(TeammateList)