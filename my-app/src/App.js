import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

const App = (props) => {


  return (
      <BrowserRouter>
         <div className='app-wrapper'>
           <Header/>
           <div className='wrapper'>
           <Navbar/>
           <div className= 'content'>

               <Route  path='/profile' render={() => <Profile postData ={props.state.profilePage.postData}/>}/>
               <Route path='/dialogs' render={() => <Dialogs dialogsData = {props.state.dialogsPage.dialogsData} messagesData ={props.state.dialogsPage.messagesData}/>}/>
               <Route path='/News' render={() => <News/>}/>
               <Route path='/Music' render={() => <Music/>}/>
               <Route path='/Settings' render={() => <Settings/>}/>
               <Route path='/Friends' render={() => <Friends/>}/>

           </div>

      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
