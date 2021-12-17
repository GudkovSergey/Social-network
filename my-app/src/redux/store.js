
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";

let store ={
    _state:  {
        profilePage : {
            postData : [
                {id: 1, message: 'Hi, how are you?', likecount: 5},
                {id: 2, message: 'It`s my first post', likecount: 10},
                {id: 3, message: 'Hi, how are you?', likecount: 5},
                {id: 4, message: 'It`s my first post', likecount: 10},
                {id: 5, message: 'Hi, how are you?', likecount: 5},
                {id: 6, message: 'It`s my first post', likecount: 10}
            ],
            newPostText : ''    },
        dialogsPage : {
            dialogsData: [
                {id: 1, name: 'Sergey'},
                {id: 2, name: 'Lora'},
                {id: 3, name: 'Kseniya'},
                {id: 4, name: 'Sava'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Glad to see you'},
                {id: 4, message: 'Yo'}
            ],
            newMessageBody: ''
        }
    },
    rerenderEntireTree() {
        console.log('State changed');
    },

    getState(){

        return this._state;
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

    
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this.rerenderEntireTree(this._state);


        }


}







window.store = store;
export default store;