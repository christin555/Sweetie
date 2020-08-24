import React from "react";
import {connect} from "react-redux";
import {followAC, unfollowAC, getUsersAC,setCurrentOffsetAC} from "../../../../../redux/user-reducer";
import Suggested from "./Suggested";



let mapStateToProps =(state) =>{

    return {
        users: state.userReducer.users,
        offset: state.userReducer.offset,
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
        setCurrentOffset:(offset)=>{
            dispatch(setCurrentOffsetAC(offset));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Suggested);
