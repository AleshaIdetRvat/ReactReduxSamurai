import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

const HeaderContainer = (props) => {
    return <Header {...props} />;
};

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login,
});

export default connect(mapStateToProps, {})(HeaderContainer);
