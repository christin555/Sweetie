import React from "react";
import photo from '../../img/tvNE7qozA0g.jpg'
import styles from "./Post.module.css"
import Header from "./Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faComment} from "@fortawesome/free-regular-svg-icons";
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import {NavLink} from "react-router-dom";

class Post extends React.Component {

render() {
    let commentElements ="";
    let m="";
     let f = (string)=>{
        if(string.length > 120){
            { string = string.substr(0, 120)}
            string +="...";
            m=    <span className={styles.moreDesc}>еще </span>
        };
        return string;
    }
let f2 =(count)=> {
    if (count > 0) {
        commentElements = <div className={styles.comments}>
            <p className={styles.allcomments}> Посмотреть все комментарии
                ({this.props.postParams.commentsCount})</p>

            <p className={styles.comment}>
                <NavLink className={styles.userLabel} to="/dolge">dolcegabbana </NavLink>
                {this.props.postParams.lastComment}
                <span className={styles.moreDesc}>еще </span>
            </p>


        </div>
    }
    return commentElements
}


    return (
        <div className={styles.post}>

            <Header location={this.props.postParams.location}
                    name={this.props.postParams.name} userPhotoPath={this.props.postParams.photoPath}/>

            <div className={styles.mediaContent}>
                <div className={styles.media}>
                    <img alt="post" className={styles.photo}
                         src={this.props.postParams.mediaPath}/>
                </div>
            </div>

            <div className={styles.textContent}>
                <div className={styles.navBar}>
                    <div className={styles.item}>
                        <FontAwesomeIcon icon={faHeart} aria-hidden="true" className="far"/>
                    </div>
                    <div className={styles.item}>
                        <FontAwesomeIcon icon={faComment} aria-hidden="true" className="far"/>
                    </div>
                    <div className={styles.item}>
                        <FontAwesomeIcon icon={faBookmark} aria-hidden="true" className="far"/>
                    </div>
                </div>
                <div className={styles.likes}>
                    25 000 отметок "Нравится"
                </div>
                <div className={styles.text}>
                    <div className={styles.description}>
                        <p className={styles.short_desc}>
                            <NavLink className={styles.userLabel} to="/dolge">{this.props.postParams.name} </NavLink>
                            {f(this.props.postParams.description)}
                            {m}
                        </p>
                    </div>

                    {f2(this.props.postParams.commentsCount)}

                    <div className={styles.timeCreated}>
                        Час назад
                    </div>

                    <div className={styles.newComment}>
                        <div contentEditable="true" className={styles.textField} placeholder="Добавьте комментарий...">
                        </div>
                        <div className={styles.publish_button}>Опубликовать</div>
                    </div>

                </div>
            </div>

        </div>
    )
}
}
export default Post;