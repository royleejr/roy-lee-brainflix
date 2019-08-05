import React from 'react';
import "./MainVideo.scss";

import PlayButton from '../../assets/Icons/SVG/Icon-play.svg';
import FullscreenButton from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import SoundButton from '../../assets/Icons/SVG/Icon-volume.svg';

class MainVideo extends React.Component {

    // changeDate = () => {
    //     let date = new Date(array[i].timestamp);
    //     let newMonth = date.getMonth();
    //     let newDay = date.getDate();
    //     let newYear = date.getFullYear();
    //     let newDate = ('0' + (newMonth + 1))+'/' + newDay +'/'+ newYear;
    // }

    render() {
        console.log(this.props)
        return (
            <section className="main-video">
                <div className="main-video--background-black">
                    <video className="main-video__video" poster={this.props.mainVideoData.image}></video>
                </div>
                <div className="main-video__controls">
                    <button className="main-video__controls__play-button">
                        <img className="controls__button__img" src={PlayButton} alt=""></img>
                    </button>
                    <div className="main-video__controls__duration">
                        <div className="controls__duration--bar"></div>
                        <p className="controls__duration--time">0:00/0:42</p>
                    </div>
                    <div className="main-video__controls__btn-container">
                        <img className="controls__btn-container__fullscreen" src={FullscreenButton} alt=""></img>
                        <img className="controls__btn-container__sound" src={SoundButton} alt=""></img>
                    </div>
                </div>
            </section>
        )
    }
}


export default MainVideo;