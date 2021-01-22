// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    };

    onClicked = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.onClicked}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker;