import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import Loader from "../../shared/loader/Loader";

import Home from "./Home";
import {follow, getUsers, setCurrentOffset, toogleIsFetching, unfollow} from "../../../redux/user-reducer";


class HomeContainer extends React.Component{

    componentDidMount() {
        let i = {
            userId: this.props.currentUser.id,
            offset: 0,
            limit: 5
        };
        this.props.toogleIsFetching(true);
        axios.post("http://localhost:3001/api/users/suggestedPeople/", i )
            .then(res => {
                this.props.getUsers(res.data.user_list);
                console.log("error in request", i);
                this.props.toogleIsFetching(false);
            })
            .catch(err => {
                console.log("error in request", err);
            });
    }

    render() {
        return(
            <>
                {this.props.isFetching
                    ? <Loader/>
                    : <Home currentUser = {this.props.currentUser} users = {this.props.users}  /> }

            </>
        );
    }

}

let mapStateToProps =(state) =>{

    return {
        currentUser: state.userReducer.currentUser,
        users: state.userReducer.users,
        isFetching: state.userReducer.isFetching,
    }
}


let mapDispatchToProps ={
    getUsers,
    toogleIsFetching,
}




export default connect(mapStateToProps, mapDispatchToProps) (HomeContainer);
