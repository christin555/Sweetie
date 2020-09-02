import React from "react";
import styles from "./UserBlock.module.css";
import UserPhoto from "../../shared/userPhoto/UserPhoto";
import {NavLink} from "react-router-dom";



const UserBlock = (props) => {

            return <div className={styles.UserBlock}>

                <div className={styles.photo}>
                   <NavLink to ={"/"+props.name+"/"} >
                       <UserPhoto  path={props.photo_path}
                                style={props.style}/>
                   </NavLink>
                </div>

                <div className={styles.info}>
                    <NavLink to ={"/"+props.name+"/"} >
                        <div className={styles.userName}>
                   {props.name ?? "user" }
                        </div>
                    </NavLink>
                    <div className={styles.aboutUser}>
                        {props.about_user.length > 20 ? props.about_user.slice(0, 20) + "..."  : props.about_user  }
                    </div>
                </div>
            </div>

}
export default UserBlock;
