import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import Loader from "./shared/loader/Loader";
import {withRouter} from "react-router-dom";
import Header from "./Header";


class HeaderContainder extends React.Component{

    componentDidMount() {

    }

    render() {
        return(
            <>
                {this.props.isFetching
                || !this.props.currentUser
                || this.props.currentUser.length == 0
                    ? <Loader/>
                    : <Header /> }

            </>
        );
    }

}

let mapStateToProps =(state) =>{

    return {
        currentUser: state.userReducer.currentUser,
    }
}


let mapDispatchToProps ={

}


export default connect(mapStateToProps, mapDispatchToProps) (Header);
