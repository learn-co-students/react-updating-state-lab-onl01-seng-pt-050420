import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    updateBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }

        })
    }

    updateResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <label>{this.state.settings.bitrate}</label>
                <button className='bitrate' onClick={this.updateBitrate}>Bitrate</button>
                <label>{this.state.settings.video.resolution}</label>
                <button className='resolution' onClick={this.updateResolution}>Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger