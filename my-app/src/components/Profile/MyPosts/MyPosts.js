import React from 'react';
import prof from './MyPosts.module.css'
import Post from "./Post/Post";
import dial from "../../Dialogs/Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required,} from "../../../utils/validators/validators";
import {Textarea} from "../../FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);
const AddNewPostForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>

            <div >
                < Field component={Textarea} name="newPostText" validate={[required, maxLength10]} className={prof.textInput}  />
            </div>

            <div>
                <button className={prof.button}  >Add post</button>
            </div>

        </form>
    )}
 const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {

    let postsElement = props.postData.map( p => <Post id = {p.id} message = {p.message} key ={p.id} likecount = {p.likecount}/>);

    // let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return(

        <div className={dial.inputDialog}>
            <div className={prof.mypost}>
                My post</div>
          <AddNewPostFormRedux onSubmit ={onAddPost}/>

            <div className={prof.posts}>
                        {postsElement}
            </div>

        </div>


    )}


export default MyPosts;