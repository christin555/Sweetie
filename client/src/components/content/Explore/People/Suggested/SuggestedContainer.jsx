import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    getUsers,
    setCurrentOffset,
    toogleIsFetching
} from "../../../../../redux/user-reducer";
import Suggested from "./Suggested";
import axios from "axios";
import Loader from "../../../../shared/loader/Loader";

class SuggestedСontainer extends React.Component{

    componentDidMount() {

        let i = {
            userId: 1,
            offset: 0,
            limit: 15
        };
        this.props.toogleIsFetching(true);
        axios.post("http://localhost:3001/api/users/suggestedPeople/", i )
            .then(res => {
                this.props.getUsers(res.data.user_list);
                this.props.toogleIsFetching(false);
            })
            .catch(err => {
                console.log("error in request", err);
            });
    }


    moreUsers = () => {
        let limit = 5;
        let new_offset = this.props.offset == 0  ? 15 : this.props.offset+limit ;
        this.props.setCurrentOffset(new_offset);
        let i = {
            userId: 1,
            offset: new_offset,
            limit: limit
        };
        this.props.toogleIsFetching(true);
        axios.post("http://localhost:3001/api/users/suggestedPeople/", i )
            .then(res => {
                this.props.getUsers(res.data.user_list);
                this.props.toogleIsFetching(false);
            })
            .catch(err => {
                console.log("error in request", err);
            });
    }

    render() {
        return(
            <>
                {this.props.isFetching && <Loader/> }
                <Suggested
                    users = {this.props.users}
                    moreUsers = {this.moreUsers}
                    unfollow = {this.props.unfollow}
                    follow = {this.props.follow}
                />
            </>
        );
    }

}

let mapStateToProps =(state) =>{

    return {
        users: state.userReducer.users,
        offset: state.userReducer.offset,
        isFetching: state.userReducer.isFetching,
    }
}


let mapDispatchToProps ={
    follow,
    unfollow,
    getUsers,
    setCurrentOffset,
    toogleIsFetching,
}

export default connect(mapStateToProps, mapDispatchToProps) (SuggestedСontainer);
