
import React from 'react';
import prof from './ProfileInfo.module.css';
import Preloader from "../../Preloader";
import ProfileStatus from "./ProfileStatus";
import MyPhoto from '../../../assets/MyPhoto.png'


const ProfileInfo = (props)=>{
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div className={prof.banner}>
                {/*<img src="https://ixbt.online/gametech/sadm_images/2009/017/acr/scr.jpg" alt=""/>*/}

            </div>

            <div className={prof.avatar}>
                <img src={MyPhoto} alt=""/>
                <div className={prof.description} >
                    <img src={props.profile.photos.large}/>

                    <ProfileStatus status ={props.status} updateStatus = {props.updateStatus}/>
                </div>
            </div>

        </div>
    )
}

 export default ProfileInfo;