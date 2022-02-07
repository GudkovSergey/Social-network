import * as React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {gettAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {authApi} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {

        this.props.gettAuthUserData();

    }

    render() {


        return (
            <Header {...this.props}/>
        )

    }

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    id: state.auth.id

});
export default connect(mapStateToProps, {gettAuthUserData})(HeaderContainer);