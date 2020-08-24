import React from "react";
import photo from '../../../assets/img/tvNE7qozA0g.jpg'
import styles from "./UserPhoto.module.css"
import userPhoto from "../../../assets/img/user.jpg"

const UserPhoto = (props) => {
    let user_photo;
    if(props.path === "" || props.path == null) user_photo = userPhoto; else user_photo = props.path;

    return(
                <div className={styles.border} style ={props.style}  >
                    <img alt="Фото профиля" className={styles.photo}
                        src={user_photo}/>
                </div>
    )
}
export default UserPhoto;
