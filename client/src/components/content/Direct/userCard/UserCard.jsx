import React from "react";
import styles from "./UserCard.module.css";
import UserPhoto from "../../../shared/userPhoto/UserPhoto";

const UserCard = (props) => {

            return <div className={styles.UserBlock}>
                <div className={styles.photo}>
                    <UserPhoto  path="https://sun9-49.userapi.com/c836539/v836539989/768bb/tvNE7qozA0g.jpg"
                                style={{width: 55 + 'px',height: 54 + 'px'}}/>
                </div>
                <div className={styles.info}>
                    <div className={styles.userName}>
                        tina
                    </div>
                    <div className={styles.aboutUser}>
                      ghbdtn · 24 ч.
                    </div>
                </div>
            </div>

}
export default UserCard;