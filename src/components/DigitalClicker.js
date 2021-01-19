// Code DigitalClicker Component Here
import React, { Component } from "react";

export default class DigitalClicker extends Component {
      // constructor for
      constructor() {
        // allows you to
        super();
    
        // Define the initial state:
        this.state = {
            // ...set state
            timesClicked: 0
        };
      }

      handleClick = () => {
          this.setState(prevState => ({
              timesClicked: prevState.timesClicked+1
          }))
      }
     
      render() {
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        );
      }
    }