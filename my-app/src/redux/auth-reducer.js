import {authApi, usersApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state = initialState, action) => {  //Принимаем предыдущее состояние state и action (передает данные из приложения в store)

    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload

            }


        default:
            return state;
    }

}
export const setAuthUserData = (id, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth}
});

export const gettAuthUserData = () => async (dispatch) => {
    let response = await authApi.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }

}

export const login = (email, password, rememberMe) => async (dispatch) => {


    let response = await authApi.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(gettAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }

}
export const logout = () => async (dispatch) => {
    let response = await authApi.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}

export default authReducer;

