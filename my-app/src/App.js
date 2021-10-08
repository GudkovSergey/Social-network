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


const App = () => {
  return (
      <BrowserRouter>
         <div className='app-wrapper'>
           <Header/>
           <div className='wrapper'>
           <Navbar/>
           <div className= 'content'>

               <Route  path='/profile' component={Profile}/>
               <Route path='/dialogs' component={Dialogs}/>
               <Route path='/News' component={News}/>
               <Route path='/Music' component={Music}/>
               <Route path='/Settings' component={Settings}/>

           </div>

      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
