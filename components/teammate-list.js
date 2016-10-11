import React from 'react';
import TeammateListElement from './teammate-list-element';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import TeammateInvite from './teammate-invite';

class TeammateList extends React.Component {
	render(){
		return(
				<div>
					<Table bordered hover responsive striped>
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Instrument</th>
								<th>City</th>
								<th>About</th>
							</tr>
						</thead>
						<tbody>
							{this.props.teammates.map((teammate, index) => {
								return (
										<TeammateListElement key={teammate.id} teammate={teammate}/>
									)
							})}
						</tbody>
					</Table>
					<TeammateInvite/>
				</div>
				

			)
	}
}

function mapStateToProps(state){
	return({
		teammates: state.teammates
	});
}

export default connect(mapStateToProps)(TeammateList)