import React from "react";
import styles from "./UserBlock.module.css";
import UserPhoto from "../../shared/userPhoto/UserPhoto";


const UserBlock = (props) => {

            return <div className={styles.UserBlock}>
                <div className={styles.photo}>
                    <UserPhoto  path={props.userPhoto}
                                style={props.style}/>
                </div>
                <div className={styles.info}>
                    <div className={styles.userName}>
                        {props.userName ?? "user" }
                    </div>
                    <div className={styles.aboutUser}>
                        {props.aboutUser}
                    </div>
                </div>
            </div>

}
export default UserBlock;
