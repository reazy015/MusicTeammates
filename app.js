import React from 'react';
import Menu from './Menu';

export default class App extends React.Component {	
	render(){

		
		return(
				<div className='container'>
					<h1 className'slogan'>Find someone to jam with</h1>
					<div className='row'>
						<Menu/>
					</div>
					<div className='row'>
						{this.props.children}
					</div>					
				</div>

			)
	}
}
