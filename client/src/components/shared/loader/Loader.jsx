import styles from "./Loader.module.css";
import preloader from "../../../assets/img/loader.svg";
import React from "react";

let Loader = (props) =>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.loader}>
                <img src={preloader}/>
            </div>
        </div>
    );
}

export default Loader;
