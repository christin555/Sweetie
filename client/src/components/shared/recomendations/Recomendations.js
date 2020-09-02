import React from "react";
import styles from "./Recomendations.module.css";
import UserBlock from "../UserBlock/UserBlock";
import {NavLink} from "react-router-dom";


const Recomendations = (props) => {

    let userRec = props.users.map( user =>{
        return (
            <div className={styles.item}>  <p className={styles.subsc}> Подписаться </p>
                <UserBlock {...user} style={{width: 35 + 'px',height: 34 + 'px'}}/>
            </div>
        );
    })
    return (
        <div className={styles.recomendations}>
            <div className={styles.header}>
                <p>Рекомендации для вас
                    <span className={styles.all}>
                        <NavLink to ="/explore/people/suggested"> Все </NavLink>
                    </span>
                </p>
            </div>
            {userRec}

        </div>
    );
}
export default Recomendations;
