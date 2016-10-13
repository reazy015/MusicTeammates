import React from 'react';
import { FormGroup, Col, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';


export default class TeammateEditInstrument extends React.Component
{
    
    // static get propTypes()
    // {
    //     return {
    //         input: React.PropTypes.object,
    //     };
    // }

    render()
    {
        return(
            <FormGroup>
                <Col sm={2}>Instrument</Col>
                <Col sm={8}>
                    <InputGroup>
                        <FormControl  id="job" type="text" placeholder="instrument"/>
                        <InputGroup.Addon>
                            <Glyphicon glyph=""/>
                        </InputGroup.Addon>
                    </InputGroup>
                </Col>
            </FormGroup>
        );
    }
}