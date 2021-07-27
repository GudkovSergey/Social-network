import React from 'react';
import prof from './MyPosts.module.css'

const MyPosts = () => {
    return(
        <div className={prof.mypost}> My post
                <div className={prof.newpost}>
                    New post
                </div>
                <div>
                    <div className={prof.item}>post1</div>
                    <div className={prof.item}>post2</div>
                </div>
            </div>


    )
}

export default MyPosts;