import React from "react";
import styles from "./Recomendations.module.css";
import UserBlock from "../UserBlock/UserBlock";
import {NavLink} from "react-router-dom";


const Recomendations = () => {
    return <div className={styles.recomendations}>
<div className={styles.header}>
<p>Рекомендации для вас
    <span className={styles.all}>
      <NavLink to ="/explore/people/suggested">
          Все
      </NavLink>
    </span></p>

</div>
        <div className={styles.item}>  <p className={styles.subsc}> Подписаться </p>
            <UserBlock style={{width: 35 + 'px',height: 34 + 'px'}}/>
        </div>
        <div className={styles.item}>  <p className={styles.subsc}> Подписаться </p>
            <UserBlock style={{width: 35 + 'px',height: 34 + 'px'}}/>
        </div>
        <div className={styles.item}>  <p className={styles.subsc}> Подписаться </p>
            <UserBlock style={{width: 35 + 'px',height: 34 + 'px'}}/>
        </div>
        <div className={styles.item}>  <p className={styles.subsc}> Подписаться </p>
            <UserBlock style={{width: 35 + 'px',height: 34 + 'px'}}/>
        </div>
        <div className={styles.item}>  <p className={styles.subsc}> Подписаться </p>
            <UserBlock style={{width: 35 + 'px',height: 34 + 'px'}}/>
        </div>

    </div>
}
export default Recomendations;
