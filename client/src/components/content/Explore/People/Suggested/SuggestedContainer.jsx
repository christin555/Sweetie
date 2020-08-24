import React from "react";
import {connect} from "react-redux";
import {followAC, unfollowAC, getUsersAC} from "../../../../../redux/user-reducer";
import Suggested from "./Suggested";



let mapStateToProps =(state) =>{

    return {
        users: state.userReducer.users,
    }
}
let mapDispatchToProps =(dispatch) =>{
    return {
        follow:(userId)=>{
            dispatch(followAC(userId));
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId));
        },
        getUsers:(users)=>{
            dispatch(getUsersAC(users));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Suggested);
