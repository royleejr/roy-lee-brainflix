import React from 'react';
import axios from 'axios';

import './UploadPageHero.scss';
import Pic from '../../assets/Images/Upload-video-preview.jpg'

class UploadPageHero extends React.Component {

    submitVideo = (event) => {
        event.preventDefault()
        const date = new Date();
        const timestamp = date.getTime();
        const title = event.target.title.value;
        const description = event.target.description.value;
        const video = {
            title: `${title}`,
            channel: `Roy's Channel`,
            image: `${Pic}`,
            description: `${description}`
        }

        const sideVideo = {
            title: `${title}`,
            channel: `Roy's Channel`,
            image: `${Pic}`,
            description: `${description}`,
            views: "0",
            likes: "0",
            duration: "3:20",
            video: "https://project-2-api.herokuapp.com/stream",
            timestamp: timestamp,
            comments: [
                {
                    "name": "Micheal Lyons",
                    "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of concert I have EVER witnessed.",
                    "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                    "likes": 0,
                    "timestamp": 1545162149000
                },
                {
                    "name": "Gary Wong",
                    "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                    "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                    "likes": 0,
                    "timestamp": 1544595784046
                },
                {
                    "name": "Theodore Duncan",
                    "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                    "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                    "likes": 0,
                    "timestamp": 1542262984046
                }
            ] 
        }

        axios.post('http://localhost:8080/videos', video)
        .then (result => {
            this.postMainVideo(result.data.id, sideVideo)
        })
        .catch (error => {
            console.log('Post did not work')
        })
    }

    postMainVideo = (id, sideVideo) => {
        axios.post(`http://localhost:8080/videos/${id}`, {...sideVideo, id:`${id}`})
        .then (result => {
            console.log('Post successful')
        })
        .catch (error => {
            console.log('Main video post didnt work')
        })
    }


    render() {
        return(
            <>
            <form className="upload" onSubmit={this.submitVideo}>
                <div className="border">
                    <section className="hero">
                        <p className="hero__title">VIDEO THUMBNAIL</p>
                        <video className="hero__video" poster={Pic}></video>
                    </section>
                    <section className="upload-input">
                        <div className="upload-input__border">
                            <p className="upload-input__title">TITLE YOUR VIDEO</p>
                            <input className="upload-input__input1" name="title" placeholder="Add a title to your video"></input>
                            <p className="upload-input__title">ADD A VIDEO DESCRIPTION</p>
                            <textarea className="upload-input__input2" name= "description" placeholder="Add a description of your video"></textarea>
                        </div>
                    </section>
                </div>
                <div className="upload-input__buttons">
                    <button className="upload-input__buttons__cancel-button1">CANCEL</button>
                    <button className="upload-input__buttons__publish-button">PUBLISH</button>
                    <button className="upload-input__buttons__cancel-button2">CANCEL</button>
                </div>
            </form>        
        </>
        )
    }
}

export default UploadPageHero;