import {profileApi, usersApi} from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {

    postData: [
        {id: 1, message: 'Hi, how are you?', likecount: 5},
        {id: 2, message: 'It`s my first post', likecount: 10},
        {id: 3, message: 'Hi, how are you?', likecount: 5},
        {id: 4, message: 'It`s my first post', likecount: 10},
        {id: 5, message: 'Hi, how are you?', likecount: 5},
        {id: 6, message: 'It`s my first post', likecount: 10}
    ],

    profile: null,
    status: ""

};

const profileReducer = (state = initialState, action) => {  //Принимаем предыдущее состояние state и action (передает данные из приложения в store)
    switch (action.type) {
        case ADD_POST: {
            let newPost = {              // Создаем новое сообщение
                id: 5,
                message: action.newPostText,
                likecount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };  //Создаем копию state и более глубокую postData

        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText) => {       //Используем в myPostContainer для диспатча
    return {
        type: ADD_POST,
        newPostText
    }
};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
};
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}
export const gettUserProfile = (userId) => {
    return (dispatch) => {
        usersApi.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));

            });
    }
};
export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));

            });
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
};

export default profileReducer;