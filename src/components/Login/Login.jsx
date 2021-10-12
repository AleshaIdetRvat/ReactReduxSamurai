import React from "react"
import MyTextarea from "../common/FormsControl/MyTextarea"
import Checkbox from "../common/FormsControl/FormikCheckbox"
import { loginThunkCreator, logoutThunkCreator } from "../../redux/reducers/AuthReducer"
import { connect } from "react-redux"
import { Formik } from "formik"
import * as yup from "yup"
import "./Login.scss"

const LoginForm = ({ onSubmitLogin, captchaUrl, authError }) => {
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
        captcha: yup.string(),
    })
    return (
        <Formik
            initialValues={{
                login: "",
                password: "",
                remeberMe: false,
                captcha: "",
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
                            <Checkbox name="rememberMe" />
                            remember me
                        </div>

                        {captchaUrl && (
                            <>
                                <div>
                                    <img src={captchaUrl} alt="captcha" />
                                </div>
                                <div class="login__input-password">
                                    <MyTextarea
                                        onBlur={handleBlur}
                                        error={authError}
                                        touched={touched.captcha}
                                        value={values.captcha}
                                        onChange={handleChange}
                                        name="captcha"
                                        placeholder="captcha"
                                        isHorizontal={true}
                                        isInput={true}
                                    />
                                </div>
                            </>
                            // authError
                        )}

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
    const { captcha, isAuth, authError, loginThunkCreator, logoutThunkCreator } = props

    const onSubmitLogin = (values) => {
        const { login, password, remeberMe, captcha } = values
        loginThunkCreator(login, password, remeberMe, captcha)
    }
    return (
        <>
            {!isAuth ? (
                <>
                    <div class="login">
                        <h1>Login</h1>
                        <LoginForm
                            authError={authError}
                            captchaUrl={captcha}
                            onSubmitLogin={onSubmitLogin}
                        />
                    </div>
                </>
            ) : (
                <div class="logout">
                    <button class="login-btn" onClick={logoutThunkCreator}>
                        Logout
                    </button>
                </div>
            )}
        </>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    authError: state.Auth.authError,
    captcha: state.Auth.captcha,
})

export default connect(mapStateToProps, {
    loginThunkCreator,
    logoutThunkCreator,
})(Login)
