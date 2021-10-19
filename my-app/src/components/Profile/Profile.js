import React from 'react';
import prof from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";


const Profile = (props) => {

    return(

        <div>
            <ProfileInfo/>
            <MyPosts postData ={props.postData}/>
        </div>
    )
}

export default Profile;