import React from 'react';
import ProfileInfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/myPosts-container";


const Profile = (props) => {

    return(

        <div>
            <ProfileInfo profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
            <MyPostsContainer store = {props.store}/>
        </div>
    )
}

export default Profile;