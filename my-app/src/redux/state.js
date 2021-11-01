
let rerenderEntireTree = ()=>{

};
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
// window.state = state;
 export let addNewPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likecount: 0
    };
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state)
}
export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}
export const subscribe = (observer)=>{
    rerenderEntireTree = observer;
}
export default state;