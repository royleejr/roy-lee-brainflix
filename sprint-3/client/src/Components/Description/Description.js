import React from 'react';
import './Description.scss';

import ViewsImg from '../../assets/Icons/SVG/Icon-views.svg';
import LikesImg from '../../assets/Icons/SVG/Icon-likes.svg';

class Description extends React.Component {

    changeDate = () => {
        let date = new Date(this.props.mainVideoData.timestamp);
        let newMonth = date.getMonth();
        let newDay = date.getDate();
        let newYear = date.getFullYear();
        let newDate = (newMonth + 1)+'/' + newDay +'/'+ newYear;
        return newDate;
    }

    render () {

        const {title, channel, views, likes, description} = this.props.mainVideoData;

        return (
            <section className="description">
                <p className="description__title">{title}</p>
                <div className="description__container-flex">
                    <div className="description__container1">
                        <p className="description__container1__channel">By {channel}</p>
                        <p className="description__container1__date">{this.changeDate()}</p>
                    </div>
                    <div className="description__container2">
                        <img className="description__container2__views-img" src={ViewsImg} alt=""></img>
                        <p className="description__container2__views">{views}</p>
                        <img className="description__container2__likes-img" src={LikesImg} alt=""></img>
                        <p className="description__container2__likes">{likes}</p>
                    </div>
                </div>
                <p className="description__info">{description}</p>
            </section>
            

        )
    }
}


export default Description;