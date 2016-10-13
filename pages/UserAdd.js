import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { PageHeader, Form, FormGroup, Col, Button } from 'react-bootstrap';
import { goBack } from 'react-router-redux';

import TeammateEditInstrument from '../components/teammate-instrument';
import TeammateEditName from '../components/teammate-name';




export default class UserAdd extends React.Component {
	constructor(props){
		super(props);

		this.formSubmit = this.formSubmit.bind(this);
	}

	
	render(){
		return(
				<div>
					<PageHeader>Form add</PageHeader>
					<Form horizontal onSubmit={this.props.handleSubmit(this.formSubmit)}>
						<Field name="username" component={TeammateEditName}/>
						<Field name="instrument" component={TeammateEditInstrument}/>
						<FormGroup>
							<Col smOffset={2} sm={8}>
								<Button type="submit" disabled={this.props.invalid || this.props.submitting}>Save</Button>
							</Col>
						</FormGroup>
					</Form>
				</div>
			);
	}


}



