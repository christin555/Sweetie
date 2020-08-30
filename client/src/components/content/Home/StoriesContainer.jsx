import {connect} from "react-redux";
import Stories from "./Stories";
import {getStories} from "../../../redux/story-reducer";



let mapStateToProps =(state) =>{
    return {
        stories: state.storyReducer.stories
    }
}

let mapDispatchToProps ={
        getStories
}
const StoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Stories);
export default StoriesContainer;
