// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {

    constructor(props) {
        super();
        this.state = {
            'timesClicked': 0
        }
    }

    incrementClick = () =>{
        this.setState(prevState => ({
            timesClicked:prevState.timesClicked+1
        }))
    }

    render() {
        return(
            <button onClick={this.incrementClick}>
                {this.state.timesClicked}
            </button>
        )
    }


}