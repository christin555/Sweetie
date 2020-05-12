import React from "react";
import styles from "./UserBlock.module.css";
import UserPhoto from "../../shared/userPhoto/UserPhoto";

const UserBlock = (props) => {

            return <div className={styles.UserBlock}>
                <div className={styles.photo}>
                    <UserPhoto  path="https://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/e35/37002717_1017046451791264_2605311442173296640_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=5i8RkQMi0kkAX-OiL0y&oh=0fdb43cb33ebba97dca47e24fcfba339&oe=5EE4B0E1"
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