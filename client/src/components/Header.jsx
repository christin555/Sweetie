import React from "react";
import styles from "./Header.module.css"
import logo from './img/1600px-Instagram_logo.svg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import photo from './img/tvNE7qozA0g.jpg'
import {NavLink} from "react-router-dom";
const Header = () => {
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
                    <FontAwesomeIcon icon={faHeart} aria-hidden="true"/>
                </div>

                <div className={styles.item}>
                <div className={styles.user}>
                    <NavLink to ="/ptofile">
                   <div className={styles.item}>
                       <img alt="userPhoto" className={styles.photo} src={photo}/>
                    </div>
                </NavLink>
                </div>
                </div>

            </div>

        </div>
    </div>
}
export default Header;