import React from 'react';
import prof from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.postData.map( p => <Post id = {p.id} message = {p.message} likecount = {p.likecount}/>)
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