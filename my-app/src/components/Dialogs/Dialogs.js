import React from 'react';
import dial from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import prof from "../Profile/MyPosts/MyPosts.module.css";
import DialogInput from "../DialogInput/AddPost";
import AddPost from "../DialogInput/AddPost";

const Dialogs = (props) => {


    let dialogsElements = props.dialogsData.map(d =>
        <DialogItem name = {d.name} id = {d.id}/>)
    let messageElements = props.messagesData.map(m =>
        <Message message = {m.message} id = {m.id}/>
    )

    return (
        <div className={dial.allDialogs}>

           <AddPost/>

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