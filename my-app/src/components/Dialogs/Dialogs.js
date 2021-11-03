import React from 'react';
import dial from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reduser";

const Dialogs = (props) => {
     let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsData.map(d =>
        <DialogItem name = {d.name} id = {d.id}/>)

    let messageElements = state.messagesData.map(m =>
        <Message message = {m.message} id = {m.id}/>
    )

    let newMessageBody = state.newMessageBody;

    let  onSendMessageClick = ()=>{
        props.store.dispatch(sendMessageCreator())
    }
    let  oneNewMessageChange = (e)=>{
      let body =  e.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={dial.allDialogs}>




           <div className={dial.dialogs__items}>
                {dialogsElements}
            </div>

            <div className={dial.allMessages}>
              <div>
                  {messageElements}
              </div>
                <div>
                    <div> <textarea value={newMessageBody} onChange={oneNewMessageChange} placeholder = 'Enter your message' /></div>
                    <div><button onClick={ onSendMessageClick}> Send</button></div>
                </div>

            </div>

        </div>
    )
}

export default Dialogs;