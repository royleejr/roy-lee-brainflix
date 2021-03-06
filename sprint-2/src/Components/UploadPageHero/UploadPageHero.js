import React from 'react';

import './UploadPageHero.scss';
import Pic from '../../assets/Images/Upload-video-preview.jpg'

class UploadPageHero extends React.Component {
    render() {
        return(
            <>
            <section className="upload">
                <div className="border">
                    <section className="hero">
                        <p className="hero__title">VIDEO THUMBNAIL</p>
                        <video className="hero__video" poster={Pic}></video>
                    </section>
                    <section className="upload-input">
                        <div className="upload-input__border">
                            <p className="upload-input__title">TITLE YOUR VIDEO</p>
                            <input className="upload-input__input1" placeholder="Add a title to your video"></input>
                            <p className="upload-input__title">ADD A VIDEO DESCRIPTION</p>
                            <textarea className="upload-input__input2" placeholder="Add a description of your video"></textarea>
                        </div>
                    </section>
                </div>
                <div className="upload-input__buttons">
                    <button className="upload-input__buttons__cancel-button1">CANCEL</button>
                    <button className="upload-input__buttons__publish-button">PUBLISH</button>
                    <button className="upload-input__buttons__cancel-button2">CANCEL</button>
                </div>
            </section>        
        </>
        )
    }
}

export default UploadPageHero;