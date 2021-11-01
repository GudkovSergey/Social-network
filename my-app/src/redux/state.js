
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
                {id: 1, message: 'How are you?'},
                {id: 1, message: 'Glad to see you'},
                {id: 1, message: 'Yo'}
            ]
        }
    },

    getState(){
        debugger;
        return this._state;
    },
    rerenderEntireTree() {
        console.log('State changed');
    },
     addNewPost(postMessage) {
        debugger;
        let newPost = {
            id: 5,
            message: postMessage,
            likecount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this.rerenderEntireTree(this._state)
    },

    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this.rerenderEntireTree(this._state)
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    }
}







window.store = store;
export default store;