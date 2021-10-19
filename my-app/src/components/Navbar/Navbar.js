import React from 'react';
import navb from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={navb.nav}>
            <div className={navb.profile}>
                <NavLink to='/profile' activeClassName={navb.activeLink}>Profhile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' activeClassName={navb.activeLink}>Message</NavLink>
            </div>
            <div>
                <NavLink to='/News' activeClassName={navb.activeLink}>News</NavLink>
            </div>
            <div>
                <NavLink to='/Music' activeClassName={navb.activeLink}>Music</NavLink>
            </div>
            <div className={navb.settings}>
                <NavLink to='/Settings' activeClassName={navb.activeLink}>Settings</NavLink>
            </div>
            <div className={navb.friends}>
                <NavLink to='/Friends' activeClassName={navb.activeLink}>Friends</NavLink>
            </div>

            <div className={navb.someFriendsAvatar}>

                <div className={navb.firstFriend}></div>

                <div className={navb.secondFriend}></div>

                <div className={navb.treeFriend}></div>

            </div>
            <div className={navb.friendsName}>
            <div className={navb.firstFriendsName}>Name</div>
            <div className={navb.secondFriendsName}>Name</div>
            <div className={navb.treeFriendsName}>Name</div>
            </div>
        </nav>
    )
}
export default Navbar;