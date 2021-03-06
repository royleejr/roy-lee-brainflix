import React from 'react';

import "./Header.scss";
import Logo from '../../assets/Logo/Logo-brainflix.svg';
import Img from '../../assets/Images/Mohan-muruge.jpg';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <img className="header__logo" src={Logo} alt=""></img>
                <input className="header__input" placeholder="Search"></input>
                <div className="header__container">
                    <button className="header__container__button">UPLOAD</button>
                    <img className="header__container__photo" src={Img} alt=""></img>
                </div>
            </header>
                
        )
    }
}


export default Header;