import React from "react";
import styles from "../Direct/Direct.module.css";
import UserCard from "./userCard/UserCard";
import Dialog from "./dialog/dialog.jsx";
import {NavLink, Route} from "react-router-dom";
import StartPage from "../Direct/startPage/startPage"

const UserList =(props)=>{
let path = "/direct/t/"+ props.id;
   return <div>
        <NavLink to = {path}>
            <UserCard/>
        </NavLink>
    </div>
}

const Direct = (props) => {


    let ElementPage;
    if(props.page == "start")  ElementPage = <StartPage/>
    else ElementPage = <Dialog data = {props}/>;

    let UserElements = props.users.map(el=><UserList key={el.id} id={el.id}></UserList>);

    return(
        <div className={styles.content}>
        <div className={styles.middle}>
        <div className={styles.container}>

            <div className={styles.header}>
              <div> Direct </div>
            </div>

            <div className={styles.users_list}>
                <div className={styles.list}>
                    <div> Cообщения </div>
                    {UserElements}
                </div>
            </div>

            <div className={styles.messages}>
                {ElementPage}
            </div>

        </div>
        </div>
        </div>
    )}
export default Direct;