import React from 'react';

import './UploadPageHero.scss';
import Pic from '../../assets/Images/Upload-video-preview.jpg'

class UploadPageHero extends React.Component {
    render() {
        return(
            <section className="hero">
                <p className="hero__title">VIDEO THUMBNAIL</p>
                <video className="hero__video" poster={Pic}></video>
            </section>
        )
    }
}

export default UploadPageHero;