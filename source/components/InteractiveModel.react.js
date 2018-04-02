
import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container, Row, Col} from 'react-grid-system';


import FahrenheitComponent  from '../components/FahrenheitComponent.react'
import CelsiusComponent  from '../components/CelsiusComponent.react'

class InteractiveModel extends Component {
    
    


    render() {
        // Create a JS variable that contains the component instance
        // To create an instance write a Jsx element
        const InteractiveJSx =
            <section>

                <FahrenheitComponent

                />
            <br/><br/>
                 <CelsiusComponent
                    
                 />

            </section>

        return (
            InteractiveJSx
        );
    }
}







module.exports = InteractiveModel