import React from 'react';
import './SideVideos.scss';

class SideVideos extends React.Component {

    render () {
        let newSideVideoData = this.props.sideVideoData.filter(item => item.id !== this.props.mainVideoData.id);

        return(
            <section className="side-videos">
                <p className="side-videos__title">NEXT VIDEO</p>
                {
                    newSideVideoData.map ( (item, i) => {
                    return (
                    <div className="side-videos__video-container" key={item.id}>
                        <video className="side-videos__video-container__video" poster={item.image}></video>
                        <div className="side-videos__video-container__info-div">
                            <p className="video-container__info-div__title">{item.title}</p>
                            <p className="video-container__info-div__channel">{item.channel}</p>
                        </div>
                    </div>
                    )
                })
            }
            </section>
        )
    }
}


export default SideVideos;