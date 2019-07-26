import React from 'react';

import Header from '../Header/Header.js';
import MainVideo from '../MainVideo/MainVideo.js';
import Description from '../Description/Description.js';
import Comments from '../Comments/Comments.js';


import {mainVideoData, sideVideoData} from '../Data/Data.js';
import './Main.scss';

class Main extends React.Component {

    state = {
        mainVideoData: mainVideoData,
        sideVideoData: sideVideoData
    }

    render() {
        return (
            <body>
                <Header />
                <MainVideo mainVideoData={this.state.mainVideoData}/>
                <Description mainVideoData={this.state.mainVideoData}/>
                <Comments />
            </body>
        );
    }
}



export default Main;