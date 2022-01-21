import React from 'react';
import ProfileInfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/myPosts-container";


const Profile = (props) => {

    return(

        <div>
            <ProfileInfo profile = {props.profile}/>
            <MyPostsContainer store = {props.store}/>
        </div>
    )
}

export default Profile;