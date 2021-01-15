import React, { Component } from "react";

export default class DigitalClicker extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
      timesClicked: 0
    }
  }

  incrementTimesClicked = () => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    });
  }

  render() 
  {
    return ( 
      <button onClick={this.incrementTimesClicked}>
        {this.state.timesClicked}
      </button>
    )
  }
}