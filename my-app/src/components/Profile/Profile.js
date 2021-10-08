import React from 'react';
import prof from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";


const Profile = () => {
    return(

        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;