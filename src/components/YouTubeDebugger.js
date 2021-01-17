
import React from 'react';


export default class YouTuberDebugger extends React.Component{
    constructor(){
        super()

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

    handlesBitrate = () =>{
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12 
            }
           
        })
    }
    handlesResolution = () =>{
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p' 
            }
        }
        })
    }

    render(){
        return(
            <div>
              <button className="bitrate" onClick={this.handlesBitrate}>{this.state.settings.bitrate}</button>
              <button className="resolution" onClick={this.handlesResolution}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
  
}
