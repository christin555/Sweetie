import {connect} from "react-redux";
import Stories from "./Stories";
import {getStories} from "../../../redux/story-reducer";



let mapStateToProps =(state) =>{

    return {
        stories: state.storyReducer.stories
    }
}
let mapDispatchToProps =(dispatch) =>{
    return {
        getStories:(stories)=>{
            dispatch(getStories(stories));
        }
    }
}
const StoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Stories);
export default StoriesContainer;