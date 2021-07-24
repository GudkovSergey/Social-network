import React from 'react';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='profile'><a href='#'>Profhile</a></div>
            <div><a href='#'>Message</a></div>
            <div><a href='#'>News</a></div>
            <div><a href='#'>Music</a></div>
            <div className='settings'><a href='#'>Settings</a></div>
        </nav>
    )
}
export default Navbar;