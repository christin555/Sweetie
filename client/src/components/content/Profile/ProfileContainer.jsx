import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import Loader from "../../shared/loader/Loader";
import Profile from "./Profile";
import {setUser, setUserPosts, toogleIsFetching} from "../../../redux/user-reducer";

class ProfileContainer extends React.Component{

    componentDidMount() {

        this.props.toogleIsFetching(true);
        axios.get("http://localhost:3001/api/users/getUser/"+1)
            .then(res => {
                this.props.setUser(res.data);
                this.props.toogleIsFetching(false);
            })
            .catch(err => {
                console.log("error in request", err);
            });


        axios.get("http://localhost:3001/api/users/getUserPosts/"+1)
            .then(res => {
                this.props.setUserPosts(res.data.posts);
                this.props.toogleIsFetching(false);
            })
            .catch(err => {
                console.log("error in request", err);
            });
    }


    morePosts = () => {
       // let limit = 5;
       // let new_offset = this.props.offset == 0  ? 15 : this.props.offset+limit ;

    }

    render() {
        return(
            <>
                {this.props.isFetching
                || !this.props.user
                || this.props.user.length == 0
                    ? <Loader/>
                    : <Profile user = {this.props.user} posts = {this.props.posts}/> }

            </>
        );
    }

}

let mapStateToProps =(state) =>{

    return {
        user: state.userReducer.user,
        posts: state.userReducer.posts,
        isFetching: state.userReducer.isFetching,
    }
}


let mapDispatchToProps ={
    setUser,
    setUserPosts,
    toogleIsFetching,
}

export default connect(mapStateToProps, mapDispatchToProps) (ProfileContainer);
