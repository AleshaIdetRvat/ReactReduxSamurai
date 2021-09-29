import React from "react"
import "./Login.scss"
import MyTextarea from "../common/FormsControl/MyTextarea"
import { loginThunkCreator, logoutThunkCreator } from "../../redux/reducers/AuthReducer"
import { connect } from "react-redux"
import { Formik } from "formik"
import * as yup from "yup"

const LoginForm = ({ onSubmitLogin }) => {
    const validationSchema = yup.object().shape({
        login: yup
            .string()
            .email("Invalid email")
            .max(20, "Too Long!")
            .required("Is required!"),
        password: yup
            .string()
            .typeError("Должно быть строкой")
            .min(5, "Too Short!")
            .max(20, "Too Long!")
            .required("Is required!"),
    })
    return (
        <Formik
            initialValues={{
                login: "",
                password: "",
                remeberMe: false,
            }}
            validateOnBlur
            onSubmit={(values) => {
                console.log("onSubmit", values)
                onSubmitLogin(values)
            }}
            validationSchema={validationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isValid,
                handleSubmit,
                dirty,
            }) => {
                return (
                    <form onSubmit={handleSubmit} class="login__form">
                        <div class="login__input-login">
                            <MyTextarea
                                value={values.login}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.login}
                                touched={touched.login}
                                name="login"
                                type="text"
                                placeholder="login"
                                isHorizontal={true}
                                isInput={true}
                            />
                        </div>
                        <div class="login__input-password">
                            <MyTextarea
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.password}
                                touched={touched.password}
                                name="password"
                                type="password"
                                placeholder="password"
                                isHorizontal={true}
                                isInput={true}
                            />
                        </div>
                        <div class="login__remember-me">
                            <input name="rememberMe" type="checkbox" />
                            remember me
                        </div>
                        <button
                            disabled={!isValid || !dirty}
                            type="submit"
                            class="login-btn"
                        >
                            Sign-in
                        </button>
                    </form>
                )
            }}
        </Formik>
    )
}

const Login = (props) => {
    const onSubmitLogin = (values) => {
        const { login, password, remeberMe } = values
        props.loginThunkCreator(login, password, remeberMe)
    }
    return (
        <>
            {!props.isAuth ? (
                <div class="login">
                    <h1>Login</h1>
                    <LoginForm onSubmitLogin={onSubmitLogin} />
                </div>
            ) : (
                <div class="logout">
                    <button class="login-btn" onClick={props.logoutThunkCreator}>
                        Logout
                    </button>
                </div>
            )}
        </>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
})

export default connect(mapStateToProps, { loginThunkCreator, logoutThunkCreator })(Login)
