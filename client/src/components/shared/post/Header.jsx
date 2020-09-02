import React from "react";
import styles from "./Post.module.css"
import UserPhoto from "../userPhoto/UserPhoto";
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <div className={styles.header}>
            <div className={styles.photo}>
                <NavLink to ={"/"+props.name} >
                    <UserPhoto  path={props.userPhotoPath} style={{width: 35 + 'px',height: 34 + 'px'}}/>
                </NavLink>
            </div>
            <div className={styles.info}>

                <NavLink to ={"/"+props.name} >
                <div className={styles.userName}>
                    {props.name}
                </div>
                </NavLink>

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
