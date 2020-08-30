import React from "react";
import styles from "./Profile.module.css";
import UserPhoto from "../../shared/userPhoto/UserPhoto";
import Post from "../../shared/post/Post";
import {NavLink} from "react-router-dom";
import { useHistory } from "react-router-dom";

const Profile = (props) => {

    console.log(props);
    const history = useHistory();
    let toEdit =  () => {
        let path = `/edit_profile`;
        history.push(path);
    }

    const Posts = props.posts.length !=0 ? props.posts.map(el => {
        return(
            <div className={styles.image} >
                <img src={el.media_path} alt="profile Pic"/>
            </div>
        )
    }):null;

    return (
        <div className={styles.middle}>

            <div className={styles.header}>

                <div className={styles.photo}>
                    <UserPhoto
                        path={props.user.user.photo_path}
                        style={{width: 150 + 'px',height:150 + 'px'}}/>
                </div>

                <div className={styles.info}>

                    <div className={styles.item}>
                        <span className={styles.user_name}>  {props.user.user.name} </span>
                        <button onClick={toEdit} className={styles.light}> Редактировать профиль </button>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.info_count}> <b>  {props.user.countPosts} </b>  публикаций </div>
                        <div className={styles.info_count}> <b>  {props.user.countSubscribers}  </b>  подписчиков </div>
                        <div className={styles.info_count}> <b>  {props.user.countSubscriptions}  </b>  подписок </div>
                    </div>

                    <div className={styles.item}>
                        <span className={styles.h1}> {props.user.user.about_user} </span>
                        <br/>
                        {props.user.web_site && <a href={props.user.user.web_site}> {props.user.web_site}</a>}
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
                {Posts}
            </div>

        </div>
    );
}

export default Profile;
