import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import Loader from "../../shared/loader/Loader";
import Profile from "./Profile";
import {setUser, setUserPosts, toogleIsFetching} from "../../../redux/user-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userName = this.props.match.params.userName;
        let userId;
        this.props.toogleIsFetching(true);
        axios.get("http://localhost:3001/api/users/getUser/"+userName)
            .then(res => {
                this.props.setUser(res.data);
                userId = res.data.user.id;

                axios.get("http://localhost:3001/api/users/getUserPosts/"+userId)
                    .then(res => {
                        this.props.setUserPosts(res.data.posts);
                        this.props.toogleIsFetching(false);

                        console.log("error in request", res.data.posts);
                    })
                    .catch(err => {
                        console.log("error in request", err);
                    });

            })
            .catch(err => {
                console.log("error in request", err);
            });

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

let WithRout = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps) (WithRout);
