import React from 'react';
import navb from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={navb.nav}>
            <div className={navb.profile}><NavLink to='/profile' activeClassName={navb.activeLink}>Profhile</NavLink></div>
            <div><NavLink to='/dialogs' activeClassName={navb.activeLink}>Message</NavLink></div>
            <div><NavLink to='/News' activeClassName={navb.activeLink}>News</NavLink></div>
            <div><NavLink to='/Music' activeClassName={navb.activeLink}>Music</NavLink></div>
            <div className={navb.settings}><NavLink to='/Settings' activeClassName={navb.activeLink}>Settings</NavLink></div>
        </nav>
    )
}
export default Navbar;