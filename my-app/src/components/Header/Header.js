import React from 'react';
import head from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={head.header}>

            <img src='https://1000logos.net/wp-content/uploads/2017/08/Assassins-Creed-symbol.jpg'/>

            <div className={head.loginBlock}>
                {props.isAuth? props.login:<NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    );

}
export default Header;