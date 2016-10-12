import React from 'react';
import { FormGroup, Col, FormControl, HelpBlock } from 'react-bootstrap';

export default class TeammateEditName extends React.Component
{
   
    // static get propTypes()
    // {
    //     return {
    //         meta: React.PropTypes.object,
    //         input: React.PropTypes.object,
    //     };
    // }

  
    render()
    {
        return(
            <FormGroup >
                <Col sm={2}>Username</Col>
                <Col sm={8}>
                    <FormControl id="username" type="text" placeholder="Username"/>
                    <FormControl.Feedback/>
                    <HelpBlock></HelpBlock>
                </Col>
            </FormGroup>
        );
    }
}