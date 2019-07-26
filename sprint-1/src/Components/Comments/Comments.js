import React from 'react';

import './Comments.scss';

class Comments extends React.Component {
    render () {

        return(
            this.props.CommentData.map( (item)=> {
                return (
                    <section className="comments" key={item.id}>
                        <img className="comments__img" alt=""></img>
                        <div className="comments__container">
                            <div className="comments__container__info">
                                <p className="container__info__name">{item.name}</p>
                                <p className="container__info__date">{item.date}</p>
                            </div>
                            <p className="comments__container__comment">{item.comment}</p>
                        </div>
                    </section>
                )
            })
        )
    }
}
    
export default Comments;