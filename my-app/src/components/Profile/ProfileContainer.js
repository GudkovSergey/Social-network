import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {gettUserProfile} from "../../redux/profile-reduser";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {usersApi} from "../../api/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.gettUserProfile(userId);

    }

    render() {
        return (

            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {gettUserProfile})(WithUrlDataContainerComponent);