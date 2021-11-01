import React from 'react';
import dial from "../Dialogs/Dialogs.module.css";
import prof from "../Profile/MyPosts/MyPosts.module.css";

let AddPost = (props)=> {
    let newPostElement = React.createRef();

    let addPost = () => {

        props.dispatch({type: 'ADD-POST'});


    }
    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
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