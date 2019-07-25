import React from 'react';
import "./MainVideo.scss";

class MainVideo extends React.Component {

    render() {

        return (
            <video className="main-video" poster={this.props.mainVideoData.image}></video>
        )
    }
}


export default MainVideo;