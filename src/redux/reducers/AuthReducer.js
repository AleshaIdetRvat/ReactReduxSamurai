import { authAPI, securAPI } from "../../components/api/api"
const SET_USER_DATA = "authreducer/SET_USER_DATA"
const SET_CAPTCHA = "authreducer/SET_CAPTCHA"
const SET_ERROR = "authreducer/SET_ERROR"
const SET_FETCHING = "authreducer/SET_FETCHING"

const defaultState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null,
    authError: null,
    isFetching: false,
}

const AuthReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data }
        case SET_CAPTCHA:
            return { ...state, captcha: action.url }
        case SET_ERROR:
            return { ...state, authError: action.errorMsg }
        case SET_FETCHING:
            return { ...state, isFetching: action.flag }
        default:
            return state
    }
}

const setFetching = (flag) => ({
    type: SET_FETCHING,
    flag,
})

const setCaptcha = (url) => ({
    type: SET_CAPTCHA,
    url,
})

const setError = (errorMsg) => ({
    type: SET_ERROR,
    errorMsg,
})

export const getCaptcha = () => async (dispatch) => {
    const url = await securAPI.getCaptcha()
    dispatch(setCaptcha(url))
}

export const setAuthUserData = (userId, email, login, isAuth = true) => ({
    type: SET_USER_DATA,
    data: { userId, email, login, isAuth },
})

export const getMyDataThunkCreator = () => async (dispatch) => {
    try {
        const myData = await authAPI.requstMyData()
        dispatch(setAuthUserData(myData.id, myData.email, myData.login))
    } catch (error) {
        dispatch(setError(error.message))
    }
}

export const loginThunkCreator =
    (email, password, rememberMe, captcha) => async (dispatch) => {
        dispatch(setFetching(true))

        dispatch(setError(null))

        try {
            await authAPI.login(email, password, rememberMe, captcha)

            dispatch(getMyDataThunkCreator())
        } catch (error) {
            const [resCode, errorMsg] = error
            dispatch(setError(errorMsg))
            if (resCode === 10) {
                dispatch(getCaptcha())
            }
        }

        dispatch(setFetching(false))
    }

export const logoutThunkCreator = () => (dispatch) => {
    dispatch(setFetching(true))
    authAPI
        .logout()
        .then((data) => {
            console.log("logout_ThunkCreator", data)
            dispatch(setAuthUserData(null, null, null, false))
        })
        .catch((reason) => {
            console.error(reason)
        })
        .finally(() => {
            dispatch(setFetching(false))
        })
}

export default AuthReducer
