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
        Axios.get(`http://localhost:8080/videos/${id}`)
        .then (response => {
            this.setState({
                mainVideoData: response.data,
                CommentData: response.data.comments
            })  
        })
        .catch (error => {
            console.log('this is the problem')
        })
    }
    
    componentDidUpdate = () => {
        if (this.state.mainVideoData.id !== this.props.match.params.id && this.props.match.params.id) {
                this.getMainVideoData(this.props.match.params.id);
        }
    }

    addComment = (event) => {
        event.preventDefault();
        let id = this.state.mainVideoData.id;
        let date = new Date ();
        let timestamp = date.getTime(); 
        let comment = {
            "name": "Nigel",
            "comment": `${event.target.comment.value}`,
            "timestamp": timestamp
        }
        this.postComment(id, comment)
        
    }

    postComment = (id, comment) => {
        Axios.post(`http://localhost:8080/videos/${id}/comments`, comment)
        .then (result => {
            this.getMainVideoData(id)
        })
        .catch (error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="main"> 
                <Header />
                <MainVideo mainVideoData={this.state.mainVideoData}/>
                <div className="main__layout">
                    <div className="main__layout__container">
                        <Description mainVideoData={this.state.mainVideoData}/>
                        <Input CommentData={this.state.CommentData} addComment={this.addComment}/>
                        <Comments CommentData={this.state.CommentData}/>
                    </div>
                    <SideVideos match={this.props.match} mainVideoData={this.state.mainVideoData}/>
                </div>
            </div> 
        );  
    }
}



export default Main;