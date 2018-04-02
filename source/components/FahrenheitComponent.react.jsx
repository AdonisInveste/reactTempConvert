import React, { Component } from 'react';
import { render } from 'react-dom';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {Container, Row, Col} from 'react-grid-system';

import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};


// Use the Component base class to create user defined Component -FahrenheitComponent
// Subclass react.Component 

class FahrenheitComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        integerInput: ''
      }
    }
    
    ManageMutation(event) {
      const integerInput = event.target.value;
      this.setState({ integerInput });
    }
    
    resetInputField() {
        this.setState({integerInput:''})
    }

    render() {
      const integerInput = this.state.integerInput;
      let result;
      if (!integerInput) {
          result=''
      } else {
        result = (integerInput*9/5)+32
      }
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
                      {this.state.integerInput} 
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

module.exports = FahrenheitComponent


// For JSx conditionals: && - It is used in conditionals that will sometimes do an action, but other times do nothing at all.

// react applications are built using components 
// Components are small, reusable pieces of code that have a single responsibility. 

//  All components must come from a component class - It is a factory for creating components. 


// In react *this* refers to thee object on which *this*'s enclosing method. 