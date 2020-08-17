import React from "react";
import styles from "./UserBlock.module.css";
import UserPhoto from "../../shared/userPhoto/UserPhoto";

const UserBlock = (props) => {

            return <div className={styles.UserBlock}>
                <div className={styles.photo}>
                    <UserPhoto  path="https://sun9-49.userapi.com/c836539/v836539989/768bb/tvNE7qozA0g.jpg"
                                style={props.style}/>
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