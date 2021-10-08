
import React from 'react';
import prof from './ProfileInfo.module.css';


const ProfileInfo = ()=>{
    return (
        <div>
            <div className={prof.banner}>
                <img src="https://ixbt.online/gametech/sadm_images/2009/017/acr/scr.jpg" alt=""/>
            </div>
            <div className={prof.avatar}>
                <img src="https://r3.mt.ru/r23/photo503C/20952863586-0/jpeg/bp.jpeg" alt=""/>
                <div className={prof.description} ></div>
            </div>

        </div>
    )
}

 export default ProfileInfo;