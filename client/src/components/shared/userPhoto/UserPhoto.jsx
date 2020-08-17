import React from "react";
import photo from '../../img/tvNE7qozA0g.jpg'
import styles from "./UserPhoto.module.css"

const UserPhoto = (props) => {
    return(
                <div className={styles.border} style ={props.style}  >
                    <img alt="Фото профиля" className={styles.photo}
                        src={props.path}/>
                </div>
    )
}
export default UserPhoto;