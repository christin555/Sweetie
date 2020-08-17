import React from "react";
import styles from "./Profile.module.css";
import UserPhoto from "../../shared/userPhoto/UserPhoto";
import Post from "../../shared/post/Post";
import {NavLink} from "react-router-dom";
import { useHistory } from "react-router-dom";
const Profile = () => {

    const history = useHistory();
    let toEdit =  () =>{
        let path = `/edit_profile`;
        history.push(path);
    }

    return <div className={styles.middle}>
         <div className={styles.header}>
        <div className={styles.photo}>
            <UserPhoto  path="https://sun9-44.userapi.com/c858028/v858028605/19f21b/8wQzNF0NSuo.jpg"
                        style={{width: 150 + 'px',height:150 + 'px'}}/>
        </div>
    <div className={styles.info}>
        <div className={styles.item}>
            <span className={styles.user_name}>   yudina.ti </span>  <button onClick={toEdit} className={styles.light}> Редактировать профиль </button>
        </div>
        <div className={styles.item}>
            <div className={styles.info_count}> <b> 38 </b>  публикаций </div>
            <div className={styles.info_count}> <b> 337 </b>  подписчиков </div>
            <div className={styles.info_count}> <b> 221 </b>  подписок </div>
        </div>
        <div className={styles.item}>
          <span className={styles.h1}> CHRIS🔸TINA </span>
           <br/>
           <a href={'vk.com/phoenix_ti'}> vk.com/phoenix_ti </a>
        </div>
    </div>
    </div>
        <div className={styles.tabs}>
            <div className={[styles.tab+" "+styles.activeTab]}>
                ПУБЛИКАЦИИ
            </div>
            <div className={styles.tab}>
                СОХРАНЕННОЕ
            </div>
            <div className={styles.tab}>
                ОТМЕТКИ
            </div>

        </div>
        <div className={styles.posts}>
           <div className={styles.image} >
               <img src="http://bubble.loc/images/uploads/media_objects/1589226452_object_2.png" alt="profile Pic"/>
           </div>
            <div className={styles.image} >
                <img src="http://bubble.loc/images/uploads/media_objects/1589226452_object_2.png" alt="profile Pic"/>
            </div>
            <div className={styles.image} >
                <img src="http://bubble.loc/images/uploads/media_objects/1589226452_object_2.png" alt="profile Pic"/>
            </div>
            <div className={styles.image} >
                <img src="http://bubble.loc/images/uploads/media_objects/1589226452_object_2.png" alt="profile Pic"/>
            </div>

            <div className={styles.image} >
                <img src="http://bubble.loc/images/uploads/media_objects/1589226452_object_2.png" alt="profile Pic"/>
            </div>
            <div className={styles.image} >
                <img src="http://bubble.loc/images/uploads/media_objects/1589226452_object_2.png" alt="profile Pic"/>
            </div>
            <div className={styles.image} >
                <img src="http://bubble.loc/images/uploads/media_objects/1589226452_object_2.png" alt="profile Pic"/>
            </div>
        </div>
    </div>
}
export default Profile;