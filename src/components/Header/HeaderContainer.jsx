import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../redux/reducers/AuthReducer";
import { requstMyData } from "../api/api";

class HeaderContainer extends Component {
    getMyData() {
        requstMyData()
            .then((data) => {
                //debugger;
                console.log(data);
                this.props.setAuthUserData(data.id, data.email, data.login);
            })
            .catch((reason) => {
                console.log(reason);
            });
    }

    componentDidMount() {
        this.getMyData();
    }
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
