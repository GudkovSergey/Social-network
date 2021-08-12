import React from 'react';
import prof from './Post.module.css'

const Post = (props) => {
    return(
        <div className={prof.item}>
            <img src="https://cdn.fishki.net/upload/post/2017/10/05/2397340/tn/photo.jpg" alt=""/>
            {props.message}
            <div>
                <span>like</span>
                <span className={prof.countcolor}> {props.likecount}</span>

            </div>
        </div>



)
}

export default Post;