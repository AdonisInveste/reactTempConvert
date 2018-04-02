import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {Container, Row, Col} from 'react-grid-system';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
    margin: 12,
  };


  
class CelsiusComponent extends Component {
    constructor(props) {
        super(props) 
        // Set initial state 
        this.state = {InputUser:''};
    }
  
    // Create eventHandler to be executed when user interacts with UI 
    // eventHandler takes an event parament
    ManageMutation(event) {
        // THIS references the object that dispatched the event
        // THE value property reveives the user input
        const InputUser = event.target.value;
        // accesses state method of the instance of the component
        // Updates the state of the component
        this.setState({InputUser})
    } 

    // method that access the component instance InputUser property 
    // Sets it to empty
    resetInputField() {
        this.setState({InputUser:''})
    }
    // render method create the UI for the component
render() {
    // jS logic  prior to the return() function 


    // Access the Updated state 
    const InputUser = this.state.InputUser;
    // Use let keyword to create identifier 
    let result;
    // if Input field is empty 
    if (!InputUser) {
        // assign string quotations to result variable 
        result=''
        // else perform the instructed operations on the User Input
    } else {
      result =(InputUser-32)*5/9
    }

    // *THIS* is an instance of used defined component 

            const MaterialInterface = 
            <MuiThemeProvider>
                    <Container>
                        <Row>
                            <Col sm={4}>
                        <h3>
                            Enter Temperature in Fahrenheit 
                            </h3>
                            </Col>
                        </Row>


                        <Row>
                        <Col sm={4}>
                            <TextField 
                            type='text' 
                            floatingLabelText="Enter  Number "
                            value =
                            {this.state.InputUser} 
                            onInput =
                            { this.ManageMutation = this.ManageMutation.bind(this)} 
                            />
                            </Col>
                            </Row>
                            <Row>
                            <Col sm={4}>
                            <p>Temperature in Celsius</p>
                            </Col>
                                    </Row>
                                    <Row>
                                    <Col sm={4}>
                                    <p>{result}</p>
                                    </Col>
                                        </Row>

                                    <Row>
                                    <Col sm={4}>
                            {/* <RaisedButton 
                            label=" Default "/> */}
                            <RaisedButton  onClick =
                            {this.resetInputField=this.resetInputField.bind(this)} label="Delete" style={style} />
                           </Col>
                            </Row>
                            

                </Container>
                </MuiThemeProvider>

            return MaterialInterface
        }
}

module.exports = CelsiusComponent