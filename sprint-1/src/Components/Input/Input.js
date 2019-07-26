import React from 'react';
import './Input.scss'

import Img from '../../assets/Images/Mohan-muruge.jpg';

class Input extends React.Component {
    render() {
        return (
            <section className="input">
                <p className="input__counter">{this.props.CommentData.length} Comments</p>
                <p className="input__title">JOIN THE CONVERSATION</p>
                <div className="input__section">
                    <img className="input__section__image" src={Img} alt=""></img>
                    <form className="input__section__form"method="POST" name="commentForm">
                        <textarea className="section__form__comment-box" placeholder="This was easily the most spectacular BMX moment ever." name="comment"></textarea>
                        <button type="submit" className="section__form__button">COMMENT</button>
                    </form>
                </div>
            </section>
                
        )
    }
}

export default Input;