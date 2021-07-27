import React from 'react';
import navb from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={navb.nav}>
            <div className={navb.profile}><a href='#'>Profhile</a></div>
            <div><a href='#'>Message</a></div>
            <div><a href='#'>News</a></div>
            <div><a href='#'>Music</a></div>
            <div className={navb.settings}><a href='#'>Settings</a></div>
        </nav>
    )
}
export default Navbar;