import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/Message/Dialogs-container";
import UsersContainer from "./components/Users/users-container";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/App-reducer";
import Preloader from "./components/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
if (!this.props.initialized){
    return <Preloader/>
}

        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='wrapper'>
                    <Navbar/>
                    <div className='content'>

                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                        <Route path='/Users' render={() => <UsersContainer/>}/>
                        <Route path='/News' render={() => <News/>}/>
                        <Route path='/Music' render={() => <Music/>}/>
                        <Route path='/Settings' render={() => <Settings/>}/>
                        <Route path='/Friends' render={() => <Friends/>}/>
                        <Route path='/Login' render={() => <Login/>}/>

                    </div>

                </div>

            </div>

        );
    }
}
const mapStateToProps = (state)=>({
    initialized: state.app.initialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
