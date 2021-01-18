import React, { Component } from 'react'

export class DigitalClicker extends Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }

    handelClick = () => {
        this.setState(preState => {
            return {
                timesClicked: preState.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handelClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker
