const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {

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
        ]


};

 const dialogsReducer = (state = initialState,action) =>{

     let stateCopy ;
     //stateCopy.message = [...state.messagesData];

     switch (action.type) {


         case SEND_MESSAGE:

             let body = action.newMessageBody;

             stateCopy  = {...state,messagesData:[...state.messagesData,{id: 5, message: body}]};


             return stateCopy;

             default:
             return state;
     }


}
export const sendMessageCreator =(newMessageBody)=>{
    return{
        type: SEND_MESSAGE,
        newMessageBody
    }
};

export default dialogsReducer;