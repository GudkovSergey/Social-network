import React from 'react';
import Profile from "./Profile";

import {getStatus, gettUserProfile, updateStatus} from "../../redux/profile-reduser";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
            if(!userId){
                this.props.history.push('/login');
            }
        }
        this.props.gettUserProfile(userId);
        this.props.getStatus(userId);

    }

    render() {

        return (

            <Profile {...this.props} profile={this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth

});
export default  compose(connect(mapStateToProps, {gettUserProfile, getStatus,updateStatus}), withRouter, withAuthRedirect)(ProfileContainer)


