import React from 'react';
import dial from "../Dialogs/Dialogs.module.css";
import prof from "../Profile/MyPosts/MyPosts.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reduser";



let AddPost = (props)=> {
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator());


    }
    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);



    }
    return(
        <div className={dial.inputDialog}>
            <div >
                <textarea className={prof.textInput} onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button className={prof.button} onClick={addPost} >Add post</button>
            </div>

        </div>
    )
}
export default AddPost;