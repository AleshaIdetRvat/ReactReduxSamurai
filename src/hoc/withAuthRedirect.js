import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import React from "react";

const withAuthRedirect = (Component) => {
    let withAuthRedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to="/login" />;
        return <Component {...props} />;
    };

    const mapStateToProps = (state) => ({
        isAuth: state.Auth.isAuth,
        myId: state.Auth.userId,
    });

    withAuthRedirectComponent = connect(mapStateToProps, {})(withAuthRedirectComponent);

    return withAuthRedirectComponent;
};

export default withAuthRedirect;
