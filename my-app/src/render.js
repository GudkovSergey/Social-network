import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addNewPost, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rereenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addNewPost={addNewPost} updateNewPostText = {updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default rereenderEntireTree;