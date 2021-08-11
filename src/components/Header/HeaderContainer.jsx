import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../redux/reducers/AuthReducer";

class HeaderContainer extends Component {
    requstUserData() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
            })
            .then((response) => {
                console.log(response.data);
                if (!response.data.resultCode) {
                    this.props.setAuthUserData(
                        response.data.data.id,
                        response.data.data.email,
                        response.data.data.login
                    );
                }
            });
    }

    componentDidMount() {
        this.requstUserData();
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
