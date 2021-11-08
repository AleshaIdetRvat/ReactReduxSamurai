import React from "react"
import MyTextarea from "../common/FormsControl/MyTextarea"
import Checkbox from "../common/FormsControl/FormikCheckbox"
import {
    loginThunkCreator,
    logoutThunkCreator,
} from "../../redux/reducers/AuthReducer"
import { connect } from "react-redux"
import { Formik } from "formik"
import * as yup from "yup"
import "./Login.scss"

const LoginForm = ({ onSubmitLogin, captchaUrl }) => {
    const validationSchema = yup.object().shape({
        login: yup
            .string()
            .email("Invalid email")
            .max(30, "Too Long!")
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
            onSubmit={(values) => onSubmitLogin(values)}
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
                    <form onSubmit={handleSubmit} class='login__form'>
                        <div class='login__input-login'>
                            <MyTextarea
                                value={values.login}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.login}
                                touched={touched.login}
                                name='login'
                                type='text'
                                placeholder='login'
                                isHorizontal={true}
                                isInput={true}
                            />
                        </div>
                        <div class='login__input-password'>
                            <MyTextarea
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.password}
                                touched={touched.password}
                                name='password'
                                type='password'
                                placeholder='password'
                                isHorizontal={true}
                                isInput={true}
                            />
                        </div>
                        <div class='login__remember-me'>
                            <Checkbox name='rememberMe' />
                            remember me
                        </div>
                        {captchaUrl && (
                            <>
                                <div class='login__captcha'>
                                    <img
                                        class='login__captcha-img'
                                        src={captchaUrl}
                                        alt='captcha'
                                    />
                                </div>
                                <div class='login__input-password input-captcha'>
                                    <MyTextarea
                                        onBlur={handleBlur}
                                        value={values.captcha}
                                        onChange={handleChange}
                                        name='captcha'
                                        placeholder='captcha'
                                        isHorizontal={true}
                                        isInput={true}
                                    />
                                </div>
                            </>
                        )}
                        <button
                            disabled={!isValid || !dirty}
                            type='submit'
                            class='login-btn'
                        >
                            Sign-in
                        </button>
                        <hr />
                        login for test:{" "}
                        <strong>alexey.frontend.dev@gmail.com</strong>
                        password for test: <strong>testpassword</strong>
                    </form>
                )
            }}
        </Formik>
    )
}

const Login = (props) => {
    const { captcha, authError, loginThunkCreator } = props

    const onSubmitLogin = (values) => {
        const { login, password, remeberMe, captcha } = values
        loginThunkCreator(login, password, remeberMe, captcha)
    }

    return (
        <div class='login'>
            <h1 class='login__title'>Login</h1>
            <LoginForm captchaUrl={captcha} onSubmitLogin={onSubmitLogin} />
            <div className='login__error-label'>{authError}</div>
            <div className='login__balls login-balls'>
                <div className='login-balls__ball1' />
                <div className='login-balls__ball2' />
            </div>
        </div>
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
