import {connect} from "react-redux";
import Posts from "./Posts";
import {getPosts} from "../../../redux/post-reducer";


let mapStateToProps =(state) =>{

    return {
        posts: state.postReducer.posts
    }
}
let mapDispatchToProps ={
    getPosts,
}


const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);
export default PostsContainer;
