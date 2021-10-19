import React from 'react';
import dial from "../Dialogs/Dialogs.module.css";
import prof from "../Profile/MyPosts/MyPosts.module.css";

let AddPost = ()=> {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }
    return(
        <div className={dial.inputDialog}>
            <div >
                <textarea className={prof.textInput} ref = {newPostElement} ></textarea>
            </div>
            <div>
                <button className={prof.button} onClick={addPost} >Add post</button>
            </div>

        </div>
    )
}
export default AddPost;