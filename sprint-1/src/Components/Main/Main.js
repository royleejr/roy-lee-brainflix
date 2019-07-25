import React from 'react';

import Header from '../Header/Header.js'
import MainVideo from '../MainVideo/MainVideo.js'
import {mainVideoData, sideVideoData} from '../Data/Data.js'
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
            </body>
        );
    }
}



export default Main;