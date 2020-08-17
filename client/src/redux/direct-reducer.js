import postReducer from "./post-reducer";

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const GET_MESSAGES = 'GET_MESSAGES';

let initialState ={
     newMessageBody: "",
     MessagesData: [
        {id:1,owner:"my",text: "ho"},
        {id:2,owner:"not",text: "ho"},
        {id:3,owner:"other",text: "ho"},
        {id:4,owner:"my",text: "ho"},
        {id:5,owner:"not",text: "ho"},
        {id:6,owner:"my",text: "ho"},
    ],
    UsersData: [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
    ]
}
const directReducer = (state = initialState, action) => {

    switch(action.type) {

            case GET_MESSAGES:
                return {...state, MessagesData: action.messages}

            case  UPDATE_NEW_MESSAGE_BODY: {
                 return {...state, newMessageBody: action.body};
            }

            case SEND_MESSAGE: {
                let new_mess={owner: "my", text: state.newMessageBody, id: 9};
                return {
                    ...state,
                    newMessageBody:"",
                    MessagesData: [ ...state.MessagesData, new_mess],
                };

            }
                default:
                    return state;
    }

}
export const updateNewMessageBodyCreator = (body) => ({type:UPDATE_NEW_MESSAGE_BODY, body: body})
export const sendNewMessageCreator = () => ({type:SEND_MESSAGE})
export const getMessages = (messages) => ({type:GET_MESSAGES,messages: messages})
export default directReducer;