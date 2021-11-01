import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addNewPost={store.addNewPost.bind(store)} updateNewPostText = {store.updateNewPostText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);