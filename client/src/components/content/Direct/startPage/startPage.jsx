import React from "react";
import styles from "../../Direct/startPage/startPage.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

const StartPage = () => {
    return(

                        <div className={styles.startPage}>
                            <div>
                                <div className={styles.iconDirect}>
                                    <FontAwesomeIcon icon={faPaperPlane} aria-hidden="true"/>
                                </div>
                            </div>
                            <div className={styles.labelStart}>Ваши сообщения    </div>
                            <div className={styles.helpStart}>Отправляйте личные фото и сообщения другу или группе   </div>
                            <div> <button> Отправить сообщение </button>   </div>
                    </div>


    )}
export default StartPage;