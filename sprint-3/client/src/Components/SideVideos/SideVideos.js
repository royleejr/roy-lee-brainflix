import React from 'react';
import './SideVideos.scss';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class SideVideos extends React.Component {

    state = {
        sideVideoData : []
    }

    componentDidMount () {
        this.getSideVideoData()
    }

    getSideVideoData = () => {
        Axios.get('http://localhost:8080/videos')
        .then (response => {
            this.setState({
                sideVideoData: response.data
            })
        })
    }

    render () {
        const newSideVideoData = this.state.sideVideoData.filter((item) => item.id !== this.props.mainVideoData.id);
        return(
            <aside className="side-videos">
                <p className="side-videos__title">NEXT VIDEO</p>
                {
                    newSideVideoData.map ( (item) => {
                    return (
                    <Link to={`/videos/${item.id}`} className="side-videos__video-container" key={item.id}>
                        <video className="side-videos__video-container__video" poster={item.image}></video>
                        <div className="side-videos__video-container__info-div">
                            <p className="video-container__info-div__title">{item.title}</p>
                            <p className="video-container__info-div__channel">{item.channel}</p>
                        </div>
                    </Link>
                    )
                })
            }
            </aside>
        )
    }
}


export default SideVideos;