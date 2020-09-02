import React from "react";
import styles from "./Home.module.css";
import StoriesContainer from "./StoriesContainer";
import PostsContainer from "./PostsContainer";
import Recomendations from "../../shared/recomendations/Recomendations";
import UserBlock from "../../shared/UserBlock/UserBlock";

const Home = (props) => {

    return <div className={styles.middle}>

        <div className={styles.lenta}>
            <StoriesContainer />
            <PostsContainer />

        </div>
        <div className={styles.navBar}>
            <UserBlock  {...props.currentUser} style={{width: 50 + 'px',height: 50 + 'px'}}/>
            <Recomendations users = {props.users} />
        </div>
    </div>
}
export default Home;
