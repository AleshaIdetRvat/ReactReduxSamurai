export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST = "UPDATE-NEW-POST";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const TOGGLE_SET_FETHING = "TOGGLE_SET_FETHING";

const defaultState = {
    postsData: [
        { id: 1, likes_count: "34", message: "Hello everybody" },
        { id: 2, likes_count: "5", message: "How are they?" },
        { id: 3, likes_count: "12", message: "Good day!!!" },
        { id: 4, likes_count: "34", message: "Hello everybody" },
        { id: 5, likes_count: "5", message: "How are they?" },
        { id: 6, likes_count: "12", message: "Good day!!!" },
    ],
    innerTextarea: "",
    userProfileData: {},
    isFetching: true,
};

const ProfileReducer = (state = defaultState, action) => {
    switch (action.type) {
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
            if (state.innerTextarea != "") {
                var newPost = {
                    likes_count: "0",
                    message: state.innerTextarea,
                    id: 7,
                };
                return {
                    ...state,
                    postsData: [...state.postsData, newPost],
                    innerTextarea: "",
                };
            }
            return state;

        case UPDATE_NEW_POST:
            return {
                ...state,
                innerTextarea: action.newText,
            };
        default:
            return state;
    }
};
export const addPostActionCreator = () => ({
    type: ADD_POST,
});

export const updateNewPostActionCreator = (text = "") => ({
    type: UPDATE_NEW_POST,
    newText: text,
});

export const setUserProfile = (userData) => ({
    type: SET_USER_PROFILE,
    userData,
});

export const toggleSetFetching = (isFetching) => ({
    type: TOGGLE_SET_FETHING,
    isFetching,
});

export default ProfileReducer;
