import React from 'react';

import "./Header.scss";
import Logo from '../../assets/Logo/Logo-brainflix.svg';
import Img from '../../assets/Images/Mohan-muruge.jpg';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Link to="/" className="header__logo"><img src={Logo} alt="" className="header__img"></img></Link>
                <input className="header__input" placeholder="Search"></input>
                <div className="header__container">
                    <Link to="/upload" className="header__container__link"><button className="header__container__button">UPLOAD</button></Link>
                    <img className="header__container__photo" src={Img} alt=""></img>
                </div>
            </header>
                
        )
    }
}


export default Header;