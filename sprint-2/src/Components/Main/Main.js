import React from 'react';
import Axios from 'axios';

import Header from '../Header/Header.js';
import MainVideo from '../MainVideo/MainVideo.js';
import Description from '../Description/Description.js';
import Input from '../Input/Input.js';
import Comments from '../Comments/Comments.js';
import SideVideos from '../SideVideos/SideVideos.js';

import './Main.scss';

class Main extends React.Component {

    state = {
        mainVideoData: {},
        CommentData: []
        
    }

    componentDidMount = () => {
        this.getMainVideoData('1af0jruup5gu');
    }

    getMainVideoData = (id) => {
        Axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=roy`)
        .then (response => {
            this.setState({
                mainVideoData: response.data,
                CommentData: response.data.comments
            })
        })
    }
    
    componentDidUpdate = () => {
        if (this.state.mainVideoData.id !== this.props.match.params.id) {
            this.getMainVideoData(this.props.match.params.id);
        }
    }

    render() {
        return (
            <div className="main"> 
                <Header />
                <MainVideo mainVideoData={this.state.mainVideoData}/>
                <div className="main__layout">
                    <div className="main__layout__container">
                        <Description mainVideoData={this.state.mainVideoData}/>
                        <Input CommentData={this.state.CommentData}/>
                        <Comments CommentData={this.state.CommentData}/>
                    </div>
                    <SideVideos match={this.props.match} mainVideoData={this.state.mainVideoData}/>
                </div>
            </div> 
        );  
    }
}



export default Main;