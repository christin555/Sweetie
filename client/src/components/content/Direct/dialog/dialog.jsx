import React from "react";
import styles from "./dialog.module.css";
import UserPhoto from "../../../shared/userPhoto/UserPhoto";
import store from "../../../../redux/store";

const Message = (props) => {

    let style;
    if(props.owner === "my")
        style = styles.my_message;
    else
        style = styles.other_message;

     return (
         <div className={style}>
         <div>  {props.text} </div> </div>
     );

}
const Dialog = (props) => {

    let data = props.data;

    let MessagesData = data.messages;
    let MessagesElement = MessagesData.map(el=><Message owner={el.owner} key ={el.id} text={el.text} />);
    let newMessageBody = data.newMessageBody;

    let onSendMess =()=>{
        console.log(data.newMassageBody)
        data.sendNewMessage();
    }

    let onChangeNewMess =(e)=>{
        console.log(data);
        let body = e.target.value;
        data.updateNewMessageBody(body);
        console.log(data.newMessageBody);
    }

    return(
        <div className={styles.dialog}>
          <div className={styles.header}>
              <div className={styles.photo}>
                  <UserPhoto  path="https://scontent-arn2-2.cdninstagram.com/v/t51.2885-19/s320x320/92947573_643213832923295_6697731340374114304_n.jpg?_nc_ht=scontent-arn2-2.cdninstagram.com&_nc_ohc=asLO_0GkiUgAX_F29Ty&oh=627694457409df0f576f99d59740afe6&oe=5F7898AD"
                              style={{width: 24 + 'px',height: 24 + 'px'}}/>
              </div>
              <div className={styles.info}>
                  <div className={styles.userName}>
             irab17
                  </div>
              </div>
          </div>
            <div className={styles.messages}>
                {MessagesElement}
            </div>
            <div className={styles.send}>
                <div className={styles.textFieldBox}>
                    <div className={styles.textField}>
                        <textarea
                            value={newMessageBody}
                            onChange={onChangeNewMess}
                            className={styles.input} placeholder="Напишите сообщение...">
                        </textarea>
                        <button onClick={onSendMess}> Отправить </button>
                    </div>
                </div>
            </div>
        </div>
    )}
export default Dialog;
