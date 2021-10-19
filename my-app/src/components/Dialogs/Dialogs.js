import React from 'react';
import dial from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.dialogsData.map(d =>
        <DialogItem name = {d.name} id = {d.id}/>)
    let messageElements = props.messagesData.map(m =>
        <Message message = {m.message} id = {m.id}/>
    )

    return (
        <div className={dial.allDialogs}>

            <div className={dial.dialogs__items}>
                {dialogsElements}
            </div>

            <div className={dial.allMessages}>
                {messageElements}

            </div>

        </div>
    )
}

export default Dialogs;