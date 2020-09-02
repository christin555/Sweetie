import React from "react";
import styles from "./Header.module.css"
import logo from '../assets/img/1600px-Instagram_logo.svg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane,faHeart,faHome,faSearch } from '@fortawesome/free-solid-svg-icons'

import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <div className={styles.header}>
        <div className = {styles.middle}>

            <div className={styles.logo}>
                    <img alt="Instagram" src={logo}/>
            </div>

            <div className={styles.search}>
                    <FontAwesomeIcon icon={faSearch} aria-hidden="true" className= {styles.fa_search}/>
                <input tupe="text" placeholder="Поиск"/>
            </div>

            <div className={styles.icons}>

                <div className={styles.item}>
                    <NavLink to ="/">
                    <FontAwesomeIcon icon={faHome} aria-hidden="true"/>
                    </NavLink>
                </div>

                <div className={styles.item}>
                    <NavLink to ="/direct/inbox">
                        <FontAwesomeIcon icon={faPaperPlane} aria-hidden="true"/>
                    </NavLink>
                </div>

                <div className={styles.item}>
                    <NavLink to ="/notify">
                    <FontAwesomeIcon icon={faHeart} aria-hidden="true"/>
                    </NavLink>
                </div>

                <div className={styles.item}>
                    <NavLink to ={"/"+props.currentUser.name+"/"}>
                        <div className={styles.user}>
                       <img alt="userPhoto" className={styles.user_photo} src={props.currentUser.photo_path}/>
                        </div>
                    </NavLink>
                </div>

            </div>

        </div>
    </div>
}
export default Header;
