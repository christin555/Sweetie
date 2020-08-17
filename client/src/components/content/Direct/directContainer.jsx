import {connect} from "react-redux";
import React from "react";
import Direct from "./direct";
import {getMessages, sendNewMessageCreator, updateNewMessageBodyCreator} from "../../../redux/direct-reducer";


let mapStateToProps =(state) =>{

    return {
        messages: state.directReducer.MessagesData,
        users: state.directReducer.UsersData,
        newMessageBody: state.directReducer.newMessageBody,
    }
}
let mapDispatchToProps =(dispatch) =>{
    return {
        getPosts:(messages)=>{
            dispatch(getMessages(messages));
        },
        updateNewMessageBody:(body)=>{
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendNewMessage:()=>{
            dispatch(sendNewMessageCreator());
        }
    }
}


const DirectContainer = connect(mapStateToProps,mapDispatchToProps)(Direct);
export default DirectContainer;