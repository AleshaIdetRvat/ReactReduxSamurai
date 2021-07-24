const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST = "UPDATE-NEW-POST"

const initialState = {
    postsData: [
        { id: 1, likes_count: "34", message: "Hello everybody" },
        { id: 2, likes_count: "5", message: "How are they?" },
        { id: 3, likes_count: "12", message: "Good day!!!" },
        { id: 4, likes_count: "34", message: "Hello everybody" },
        { id: 5, likes_count: "5", message: "How are they?" },
        { id: 6, likes_count: "12", message: "Good day!!!" },
    ],
    innerTextarea: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                likes_count: '0',
                message: state.innerTextarea,
                id: 7
            }
            state.postsData.push(newPost)
            break;
        case UPDATE_NEW_POST:
            state.innerTextarea = action.newText;
            break;

        default:
            break;
    }
    return state;
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostActionCreator = (text = "") => ({
    type: UPDATE_NEW_POST,
    newText: text
})

export default profileReducer