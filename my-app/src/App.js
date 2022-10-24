import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/App-reducer";
import Preloader from "./components/Preloader";
import {withSuspense} from "./components/Hoc/withSuspense";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/Message/Dialogs-container"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/users-container"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='wrapper'>
                    <Navbar/>
                    <div className='content'>

                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>

                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>

                        <Route path='/Users'
                               render={withSuspense(UsersContainer)}/>

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

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
