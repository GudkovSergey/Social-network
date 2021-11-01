import React from 'react';
import prof from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";


const Profile = (props) => {

    return(

        <div>
            <ProfileInfo/>
            <MyPosts postData ={props.postData}
                     newPostText = {props.newPostText}
                     dispatch = {props.dispatch}
                     />
        </div>
    )
}

export default Profile;