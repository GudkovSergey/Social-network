


//Profile

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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

//Message

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageCreator =()=>{
    return{
        type: SEND_MESSAGE
    }
};
export const updateNewMessageBodyCreator = (body)=>{
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
};


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
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

    
    dispatch(action){
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likecount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this.rerenderEntireTree(this._state);

        }else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this.rerenderEntireTree(this._state);

        }else if(action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this.rerenderEntireTree(this._state);

        }else if (action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push({id: 5, message: body});
            this.rerenderEntireTree(this._state);
        }
        }


}







window.store = store;
export default store;