export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST = "UPDATE-NEW-POST";

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
};

const ProfileReducer = (state = defaultState, action) => {
    switch (action.type) {
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

export default ProfileReducer;
