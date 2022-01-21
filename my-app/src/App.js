import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/Message/Dialogs-container";
import UsersContainer from "./components/Users/users-container";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {


    return (

        <div className='app-wrapper'>
            <Header/>
            <div className='wrapper'>
                <Navbar/>
                <div className='content'>

                    <Route path='/profile' render={() => <ProfileContainer />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store}
                                                                           dialogsData={props.dialogsData}
                                                                           messagesData={props.messagesData}/>}/>

                    <Route path='/Users' render={() => <UsersContainer/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                    <Route path='/Friends' render={() => <Friends/>}/>

                </div>

            </div>

        </div>

    );
}

export default App;
