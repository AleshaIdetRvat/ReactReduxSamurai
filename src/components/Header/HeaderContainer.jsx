import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getMyDataThunkCreator } from "../../redux/reducers/AuthReducer";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.getMyDataThunkCreator();
    }
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login,
});

export default connect(mapStateToProps, { getMyDataThunkCreator })(HeaderContainer);
