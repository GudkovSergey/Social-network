import React from 'react';
import prof from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div className={prof.mypost}> My post
                <div className={prof.newpost}>
                    New post
                </div>
                <div>
                    <Post message='Hi, how are you?' likecount ='5'/>
                    <Post message='It`s my first post' likecount ='10'/>

                </div>
            </div>


    )
}

export default MyPosts;