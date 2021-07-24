const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST = "UPDATE-NEW-POST"

const profileReducer = (state, action) => {
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