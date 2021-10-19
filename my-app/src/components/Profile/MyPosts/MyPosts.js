import React from 'react';
import prof from './MyPosts.module.css'
import Post from "./Post/Post";

import AddPost from "../../DialogInput/AddPost";

const MyPosts = (props) => {

    let postsElement = props.postData.map( p => <Post id = {p.id} message = {p.message} likecount = {p.likecount}/>)

    return(
        <div className={prof.mypost}> My post

                <div>
                    <AddPost
                        newPostText = {props.newPostText}
                        addNewPost = {props.addNewPost}
                        updateNewPostText ={props.updateNewPostText}/>
                    <div className={prof.posts}>
                        {postsElement}
                    </div>
                </div>
            </div>


    )
}

export default MyPosts;