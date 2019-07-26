import React from 'react';
import './Comments.scss'

import Img from '../../assets/Images/Mohan-muruge.jpg';

class Comments extends React.Component {
    render() {
        return (
            <section className="comments">
                <p className="comments__counter">3 Comments</p>
                <p className="comments__title">JOIN THE CONVERSATION</p>
                <div className="comments__section">
                    <img className="comments__section__image" src={Img}></img>
                    <form className="comments__section__form"method="POST" name="commentForm">
                        <textarea className="section__form__comment-box" placeholder="This was easily the most spectacular BMX moment ever." name="comment"></textarea>
                        <button type="submit" className="section__form__button">COMMENT</button>
                    </form>
                </div>
            </section>
                
        )
    }
}

export default Comments;