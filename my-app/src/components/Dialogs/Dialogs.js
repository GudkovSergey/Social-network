import React from 'react';
import dial from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";



const Dialogs = (props) => {
     let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(d =>
        <DialogItem name = {d.name} key = {d.id} id = {d.id}/>)

    let messageElements = state.messagesData.map(m =>
        <Message message = {m.message} key = {m.id} id = {m.id}/>
    )

    let newMessageBody = state.newMessageBody;



    let  addNewMessage =(values)=>{
        props.sendMessage(values.newMessageBody);
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

               <AddMessageFormRedux onSubmit={addNewMessage}/>  {/* отправить форму*/}

            </div>

        </div>
    )
}
 const maxLength50 = maxLengthCreator(50);
const AddmessageForm  = (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>  {/* обработать и отправить форму*/}
            <div>
                <Field component ={Textarea} validate={[required, maxLength50]} name="newMessageBody"  placeholder = "Enter your message" /></div>
            <div>
                <button> Send</button></div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: "DialogAddMessageForm"})(AddmessageForm)
export default Dialogs;
