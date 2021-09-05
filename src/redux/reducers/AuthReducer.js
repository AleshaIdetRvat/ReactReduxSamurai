import { authAPI } from "../../components/api/api";
const SET_USER_DATA = "SET_USER_DATA";

const defaultState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const AuthReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data };

        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth = true) => ({
    type: SET_USER_DATA,
    data: { userId, email, login, isAuth },
});

export const getMyDataThunkCreator = () => (dispatch) => {
    authAPI
        .requstMyData()
        .then((data) => {
            console.log(data);
            dispatch(setAuthUserData(data.id, data.email, data.login));
        })
        .catch((reason) => {
            console.error(reason);
        });
};

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
    authAPI
        .login(email, password, rememberMe)
        .then((data) => {
            console.log("login_ThunkCreator", data);
            dispatch(getMyDataThunkCreator());
        })
        .catch((reason) => {
            console.error(reason);
        });
};

export const logoutThunkCreator = () => (dispatch) => {
    authAPI
        .logout()
        .then((data) => {
            console.log("logout_ThunkCreator", data);
            dispatch(setAuthUserData(null, null, null, false));
        })
        .catch((reason) => {
            console.error(reason);
        });
};

export default AuthReducer;
