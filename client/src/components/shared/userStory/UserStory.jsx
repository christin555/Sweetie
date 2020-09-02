import React from "react";
import styles from "./UserStory.module.css"
import UserPhoto from "../userPhoto/UserPhoto";

const UserStory = (props) => {
    return(
        <div className={styles.item}>
            <div className={styles.media}>

                <UserPhoto path ={props.photoPath} style={{width: 58 + 'px',height: 56 + 'px'}} />

                <div className={styles.name}>
                    {props.userName.length > 10 ? props.userName.slice(0, 10) + "..."  : props.userName  }

                </div>

            </div>
        </div>
    )

}
export default UserStory;
