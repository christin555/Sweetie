import React from "react";
import styles from "./Home.module.css"
import UserStory from "../../shared/userStory/UserStory";
import axios from "axios";


class Stories extends React.Component{

    componentDidMount() {
        let i = {
            userId: 1
        };
        axios.post("http://localhost:3001/api/getMyStories/", i )
            .then(res => {
                this.props.getStories(res.data);
            })
            .catch(err => {
                console.log("error in request", err);
            });
    }

    render(){
        let StoryElements = this.props.stories.map(story =>  <UserStory userName= {story.name} photoPath={story.photo_path} key={story.id} />);
        return <div className={styles.story}>
            <div className={styles.items}>
                {StoryElements}
            </div>
        </div>

    }
}

export default Stories;