import React from "react";
import "./Login.scss";
import { Field, reduxForm } from "redux-form";
import MyTextarea from "../common/FormsControl/MyTextarea";
import { required, maxLenghtCreator } from "../utils/validators/validators";
import { loginThunkCreator, logoutThunkCreator } from "../../redux/reducers/AuthReducer";
import { connect } from "react-redux";

const maxLenght30 = maxLenghtCreator(30);

const LoginForm = (props) => {
    console.log("LoginForm props: ", props);
    return (
        <form onSubmit={props.handleSubmit} class="login__form">
            <div class="login__input-login">
                <Field
                    isHorizontal={true}
                    isInput={true}
                    name="login"
                    component={MyTextarea}
                    validate={[required, maxLenght30]}
                    type="text"
                    placeholder="login"
                />
            </div>
            <div class="login__input-password">
                <Field
                    isHorizontal={true}
                    isInput={true}
                    name="password"
                    validate={[required, maxLenght30]}
                    component={MyTextarea}
                    type="password"
                    placeholder="password"
                />
            </div>
            <div class="login__remember-me">
                <Field name="rememberMe" type="checkbox" component="input" />
                remember me
            </div>
            <button class="login-btn">Sign-in</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
    const onSubmitLogin = (formData) => {
        const { login, password, remeberMe } = formData;
        props.loginThunkCreator(login, password, remeberMe);
    };
    return (
        <>
            {!props.isAuth ? (
                <div class="login">
                    <h1>Login</h1>
                    <LoginReduxForm onSubmit={onSubmitLogin} />
                </div>
            ) : (
                <div class="logout">
                    <button class="login-btn" onClick={props.logoutThunkCreator}>
                        Logout
                    </button>
                </div>
            )}
        </>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
});

export default connect(mapStateToProps, { loginThunkCreator, logoutThunkCreator })(Login);
