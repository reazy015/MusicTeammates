import React from 'react';
import { connect } from 'react-redux';
import { Table, Pagination } from 'react-bootstrap';
import { push } from 'react-router-redux';


import TeammateListElement from './teammate-list-element';
import TeammateDetail from './teammate-detail';
import TeammateInvite from './teammate-invite';


class TeammateList extends React.Component {
	constructor(props){
		super(props);

		this.changePage = this.changePage.bind(this);
	}

	

	render(){
		const per_page = 10;
		const pages = Math.ceil(this.props.initialUsers.length / per_page);
		const current_page = this.props.page;
		const start_offset = (current_page - 1) * per_page;
		let start_count = 0;


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
								if( index >= start_offset && start_count < per_page) {
									start_count++;								
								return (
										<TeammateListElement key={teammate.id} teammate={teammate}/>
									)
							}
							})}
						</tbody>
					</Table>	
					<Pagination className='users-pagintaion pull-right' bsSize='medium' maxButtons={10} first last next prev boundaryLinks items={pages} activePage={current_page} onSelect={this.changePage}/>								
				</div>
				<div>				
				<TeammateDetail />
				<TeammateInvite />	
				</div>
			</div>

			)
	}
	changePage(page){
		this.props.dispatch(push('/?page=' + page));
	}
}

function mapStateToProps(state){
	return {
		initialUsers: state.inititalUsers,
		page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
		addTeammate: state.addTeammate,
	}
}

export default connect(mapStateToProps)(TeammateList)