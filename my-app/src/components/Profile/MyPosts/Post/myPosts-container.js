import React from 'react';
import MyPosts from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reduser";
import {connect} from "react-redux";


    let mapStateToProps = (state) =>{
       return {
           postData: state.profilePage.postData,
           newPostText: state.profilePage.newPostText
       }
    }
    let mapDispatchToProps = (dispatch) =>{
       return {
           updateNewPostText: (text) => {
               let action = updateNewPostTextActionCreator(text);
               dispatch(action);
           },
           addPost: ()=>{
               dispatch(addPostActionCreator())
           }
       }
    }
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)
export default MyPostsContainer;