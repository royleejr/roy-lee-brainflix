import React from 'react';

import './Comments.scss';

class Comments extends React.Component {

    changeDate = (time) => {
        let date = new Date(time);
        let newMonth = date.getMonth();
        let newDay = date.getDate();
        let newYear = date.getFullYear();
        let newDate = (newMonth + 1)+ '/' + newDay + '/'+ newYear;
        return newDate;
    }

    render () {
        return(
            this.props.CommentData.map( (item)=> {
                return (
                    <section className="comments" key={item.timestamp}>
                        <img className="comments__img" alt=""></img>
                        <div className="comments__container">
                            <div className="comments__container__info">
                                <p className="container__info__name">{item.name}</p>
                                <p className="container__info__date">{this.changeDate(item.timestamp)}</p>
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