import React from 'react';
import prof from './Profile.module.css';


const Profile = () => {
    return(
        <div className={prof.content}>
            <div className={prof.banner}>
                <img src="https://ixbt.online/gametech/sadm_images/2009/017/acr/scr.jpg" alt=""/>
            </div>
            <div className={prof.avatar}>
                <img src="https://r3.mt.ru/r23/photo503C/20952863586-0/jpeg/bp.jpeg" alt=""/>
                <div className={prof.description} ></div>
            </div>
            <div className={prof.mypost}> My post
                <div className={prof.newpost}>
                    New post
                </div>
                <div>
                    <div className={prof.post_1}>post1</div>
                    <div className={prof.post_2}>post2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;