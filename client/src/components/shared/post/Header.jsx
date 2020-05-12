import React from "react";
import styles from "./Post.module.css"
import UserPhoto from "../userPhoto/UserPhoto";
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const Header = (props) => {
    return(
        <div className={styles.header}>
            <div className={styles.photo}>
                <UserPhoto  path={props.userPhotoPath} style={{width: 35 + 'px',height: 34 + 'px'}}/>
            </div>
            <div className={styles.info}>
                <div className={styles.userName}>
                    {props.name}
            </div>
                <div className={styles.location}>
                    {props.location}
            </div>
            </div>
            <div className={styles.more}>
                <FontAwesomeIcon icon={faEllipsisH} aria-hidden="true" className= {styles.fa_elllipsis}/>
            </div> </div>
    )
}

export default Header;