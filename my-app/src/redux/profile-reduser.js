const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {

        postData: [
            {id: 1, message: 'Hi, how are you?', likecount: 5},
            {id: 2, message: 'It`s my first post', likecount: 10},
            {id: 3, message: 'Hi, how are you?', likecount: 5},
            {id: 4, message: 'It`s my first post', likecount: 10},
            {id: 5, message: 'Hi, how are you?', likecount: 5},
            {id: 6, message: 'It`s my first post', likecount: 10}
        ],
        newPostText: ''

};

const profileReducer = (state = initialState ,action) => {  //Принимаем предыдущее состояние state и action (передает данные из приложения в store)
    switch (action.type) {
        case ADD_POST: {
            let newPost = {              // Создаем новое сообщение
                id: 5,
                message: state.newPostText,
                likecount: 0
            };
           return {...state,
                postData:[...state.postData,newPost],
                newPostText:''
            };  //Создаем копию state и более глубокую postData

    }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText};
        }
        default:
            return state;
    }
}
export const addPostActionCreator =()=>{       //Используем в myPostContainer для диспатча
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