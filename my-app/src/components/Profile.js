import React from 'react';

const Profile = () => {
    return(
        <div className='content'>
            <div className='banner'>
                <img src="https://ixbt.online/gametech/sadm_images/2009/017/acr/scr.jpg" alt=""/>
            </div>
            <div className='avatar'>
                <img src="https://r3.mt.ru/r23/photo503C/20952863586-0/jpeg/bp.jpeg" alt=""/>
                <div className='description' ></div>
            </div>
            <div className='mypost'> My post
                <div className="new_post">
                    New post
                </div>
                <div>
                    <div className="post-1">post1</div>
                    <div className="post-2">post2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;