import React from 'react';

import "./Header.scss";
import Logo from '../../assets/Logo/Logo-brainflix.svg';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img src={Logo}></img>
                <input></input>
            </header>
        )
    }
}


export default Header;