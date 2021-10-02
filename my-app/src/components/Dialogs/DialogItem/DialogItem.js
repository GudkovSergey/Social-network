import React from 'react';
import dial from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props)=>{
    let path = "/dialogs/" + props.id;
    return (
        <div className={dial.dialog + ' ' + dial.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}
const Message = (props) => {
    return(
        <div className={dial.message}> {props.message}</div>
    )
}
const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Lora'},
        {id: 3, name: 'Kseniya'},
        {id: 4, name: 'Sava'}
    ]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'How are you?'},
        {id: 1, message: 'Glad to see you'},
        {id: 1, message: 'Yo'}
    ]

    let dialogsElements = dialogsData.map(d =>
        <DialogItem name = {d.name} id = {d.id}/>)
    let messageElements = messagesData.map(m =>
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