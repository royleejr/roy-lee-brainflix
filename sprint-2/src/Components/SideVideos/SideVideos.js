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
        Axios.get('https://project-2-api.herokuapp.com/videos?api_key=roy')
        .then (response => {
            const sideVideoData = response.data.filter((item) => item.id !== this.props.mainVideoData.id);
            this.setState({
                sideVideoData: sideVideoData
            })
        })
    }

    render () {
        return(
            <aside className="side-videos">
                <p className="side-videos__title">NEXT VIDEO</p>
                {
                    this.state.sideVideoData.map ( (item) => {
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