import React from "react";
import styles from "./UserCard.module.css";
import UserPhoto from "../../../shared/userPhoto/UserPhoto";

const UserCard = (props) => {

            return <div className={styles.UserBlock}>
                <div className={styles.photo}>
                    <UserPhoto  path="https://scontent-arn2-2.cdninstagram.com/v/t51.2885-19/s320x320/92947573_643213832923295_6697731340374114304_n.jpg?_nc_ht=scontent-arn2-2.cdninstagram.com&_nc_ohc=asLO_0GkiUgAX_F29Ty&oh=627694457409df0f576f99d59740afe6&oe=5F7898AD"
                                style={{width: 55 + 'px',height: 54 + 'px'}}/>
                </div>
                <div className={styles.info}>
                    <div className={styles.userName}>
                        irab17
                    </div>
                    <div className={styles.aboutUser}>
                        ℐ𝓇𝒾𝓃𝒶 · 24 ч.
                    </div>
                </div>
            </div>

}
export default UserCard;
