import React from "react";
import Post from "../../shared/post/Post";
import axios from "axios";

class Posts extends React.Component{

    componentDidMount() {
        let i = {
            userId: 1,
            offset: 0
        };
        axios.post("http://localhost:3001/api/getLenta/", i )
            .then(res => {
                this.props.getPosts(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log("error in request", err);
            });

    }

    render() {

        let PostsElements = this.props.posts.map(post =>  <Post postParams={post} key={post.id}/>);

              return (
               <div> {PostsElements} </div>

              )
    }
}
export default Posts;