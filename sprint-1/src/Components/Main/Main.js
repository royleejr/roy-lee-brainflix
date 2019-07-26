import React from 'react';

import Header from '../Header/Header.js';
import MainVideo from '../MainVideo/MainVideo.js';
import Description from '../Description/Description.js';
import Input from '../Input/Input.js';
import Comments from '../Comments/Comments.js';
import SideVideos from '../SideVideos/SideVideos.js';



import {mainVideoData, sideVideoData, CommentData} from '../Data/Data.js';
import './Main.scss';

class Main extends React.Component {

    state = {
        mainVideoData: mainVideoData,
        sideVideoData: sideVideoData,
        CommentData: CommentData
    }

    render() {
        return (
            <>
                <Header />
                <MainVideo mainVideoData={this.state.mainVideoData}/>
                <Description mainVideoData={this.state.mainVideoData}/>
                <Input CommentData={this.state.CommentData}/>
                <Comments CommentData={this.state.CommentData} />
                <SideVideos sideVideoData={sideVideoData} mainVideoData={mainVideoData}/>
            </> 
        );  
    }
}



export default Main;