import rereenderEntireTree from "../render";

let state = {
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
}
 export let addNewPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likecount: 0
    };
    state.profilePage.postData.push(newPost);
    rereenderEntireTree(state)
}
export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rereenderEntireTree(state)
}
export default state;