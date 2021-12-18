import React from 'react';
import prof from './MyPosts.module.css'
import Post from "./Post/Post";
import dial from "../../Dialogs/Dialogs.module.css";

const MyPosts = (props) => {

    let postsElement = props.postData.map( p => <Post id = {p.id} message = {p.message} key ={p.id} likecount = {p.likecount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }
    return(

        <div className={dial.inputDialog}>
            <div className={prof.mypost}>
                My post</div>
            <div>

                <div >
                   <textarea className={prof.textInput} onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>

                <div>
                <button className={prof.button} onClick={onAddPost} >Add post</button>
                </div>

            </div>

            <div className={prof.posts}>
                        {postsElement}
            </div>

        </div>


    )}

export default MyPosts;