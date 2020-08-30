import {connect} from "react-redux";
import React from "react";
import Direct from "./direct";
import {getMessages, sendNewMessage, updateNewMessageBody} from "../../../redux/direct-reducer";


let mapStateToProps =(state) =>{

    return {
        messages: state.directReducer.MessagesData,
        users: state.directReducer.UsersData,
        newMessageBody: state.directReducer.newMessageBody,
    }
}
let mapDispatchToProps = {
    getMessages,
    updateNewMessageBody,
    sendNewMessage,
}


const DirectContainer = connect(mapStateToProps,mapDispatchToProps)(Direct);
export default DirectContainer;
