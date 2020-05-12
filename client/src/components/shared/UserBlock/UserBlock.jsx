import React from "react";
import styles from "./UserBlock.module.css";
import UserPhoto from "../../shared/userPhoto/UserPhoto";

const UserBlock = (props) => {

            return <div className={styles.UserBlock}>
                <div className={styles.photo}>
                    <UserPhoto  style={props.style}/>
                </div>
                <div className={styles.info}>
                    <div className={styles.userName}>
                        tina
                    </div>
                    <div className={styles.aboutUser}>
                        CHRISTINA
                    </div>
                </div>
            </div>

}
export default UserBlock;