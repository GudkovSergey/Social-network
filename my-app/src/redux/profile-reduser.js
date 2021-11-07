const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData : [
        {id: 1, message: 'Hi, how are you?', likecount: 5},
        {id: 2, message: 'It`s my first post', likecount: 10},
        {id: 3, message: 'Hi, how are you?', likecount: 5},
        {id: 4, message: 'It`s my first post', likecount: 10},
        {id: 5, message: 'Hi, how are you?', likecount: 5},
        {id: 6, message: 'It`s my first post', likecount: 10}
    ],
    newPostText : ''    };

const profileReducer = (state = initialState ,action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likecount: 0
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator =()=>{
    return{
        type: ADD_POST
    }
};
export const updateNewPostTextActionCreator = (text)=>{
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};


export default profileReducer;