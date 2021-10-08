import React from 'react';
import prof from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hi, how are you?', likecount: 5},
        {id: 2,message: 'It`s my first post', likecount: 10},
        {id: 3,message: 'Hi, how are you?', likecount: 5},
        {id: 4,message: 'It`s my first post', likecount: 10},
        {id: 5,message: 'Hi, how are you?', likecount: 5},
        {id: 6,message: 'It`s my first post', likecount: 10}
    ]
    let postsElement = postData.map( p => <Post id = {p.id} message = {p.message} likecount = {p.likecount}/>)
    return(
        <div className={prof.mypost}> My post

                <div>
                    <div >
                    <textarea className={prof.textInput} ></textarea>
                    </div>
                    <div>
                    <button className={prof.button} >Add post</button>
                    </div>
                    <div className={prof.posts}>
                        {postsElement}
                    </div>
                </div>
            </div>


    )
}

export default MyPosts;