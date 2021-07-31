import { ADD_POST, UPDATE_NEW_POST } from "../store";

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
                const newPost = {
                    likes_count: "0",
                    message: state.innerTextarea,
                    id: 7,
                };

                state.postsData.push(newPost);
            }
            break;

        case UPDATE_NEW_POST:
            state.innerTextarea = action.newText;

            break;
        default:
            break;
    }
    return state;
};
export default ProfileReducer;
