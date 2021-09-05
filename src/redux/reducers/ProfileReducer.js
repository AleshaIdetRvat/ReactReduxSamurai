import { profileAPI } from "../../components/api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const TOGGLE_SET_FETHING = "TOGGLE_SET_FETHING";

const defaultState = {
    postsData: [
        // { id: 1, likes_count: "34", message: "Hello everybody" },
        // { id: 2, likes_count: "5", message: "How are they?" },
    ],
    userProfileData: {},
    isFetching: true,
    status: "",
};

const ProfileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfileData: action.userData,
            };
        case TOGGLE_SET_FETHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case ADD_POST:
            if (action.newPost != "") {
                const post = {
                    likes_count: "0",
                    message: action.newPost,
                    id: 7,
                };
                return {
                    ...state,
                    postsData: [...state.postsData, post],
                };
            }
            return state;

        default:
            return state;
    }
};
export const addPostActionCreator = (newPost) => ({
    type: ADD_POST,
    newPost,
});

export const setUserProfile = (userData) => ({
    type: SET_USER_PROFILE,
    userData,
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
});

export const toggleSetFetching = (isFetching) => ({
    type: TOGGLE_SET_FETHING,
    isFetching,
});

export const getUserStatus = (userId) => (dispatch) => {
    // debugger;
    dispatch(toggleSetFetching(true));

    profileAPI
        .requestProfileStatus(userId)
        .then((data) => {
            dispatch(setStatus(data));
            dispatch(toggleSetFetching(false));
        })
        .catch((reason) => console.log(reason));
};

export const updateUserStatus = (status) => (dispatch) => {
    // debugger;
    dispatch(toggleSetFetching(true));

    profileAPI
        .updataProfileStatus(status)
        .then((data) => {
            dispatch(setStatus(status));
            dispatch(toggleSetFetching(false));
        })
        .catch((reason) => console.log(reason));
};

export const getUserPersonDataThunkCreator = (userId) => (dispatch) => {
    // debugger;
    dispatch(toggleSetFetching(true));

    profileAPI
        .requestProfileData(userId)
        .then((data) => {
            dispatch(setUserProfile(data));
            dispatch(toggleSetFetching(false));
        })
        .catch((reason) => console.log(reason));
};

export default ProfileReducer;
