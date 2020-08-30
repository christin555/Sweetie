import React from "react";
import styles from "./Suggested.module.css";
import UserBlock from "../../../../shared/UserBlock/UserBlock";

const Suggested =(props) => {

    let SuggestedElements = () => {
      return  props.users.map(el => {
                let button_follow;
                el.followed
                    ? button_follow =
                        <p onClick={() => props.unfollow(el.id)} className={`${styles.subsc} ${styles.unfollow}`}>Подписки </p>
                    : button_follow = <p onClick={() => props.follow(el.id)} className={styles.subsc}> Подписаться </p>

                return <div className={styles.item}>
                    {button_follow}
                    <UserBlock
                        userName={el.name}
                        userPhoto={el.photo_path}
                        aboutUser={el.about_user}
                        style={{width: 44 + 'px', height: 44 + 'px'}}/>
                </div>
            }
        );
    }

        return (
        <div className={styles.middle}>
            <div className={styles.title}>
                Рекомендации
                <button onClick={ ()=> props.moreUsers()}> еще </button>
            </div>
            <div className={styles.items}>
                  {SuggestedElements()}
            </div>
        </div>
    )

}

export default Suggested;
