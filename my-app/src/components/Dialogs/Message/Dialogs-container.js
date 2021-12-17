import React from 'react';

import Dialogs from "../Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reduser";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;



    let  onSendMessageClick = ()=>{
        props.store.dispatch(sendMessageCreator())
    }
    let  oneNewMessageChange = (body)=>{

        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <Dialogs updateNewMessageBody = {oneNewMessageChange} sendMessage = {onSendMessageClick} dialogsPage = {state}/>
    )
}

export default DialogsContainer;