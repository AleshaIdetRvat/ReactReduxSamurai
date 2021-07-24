const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.innerInput != "") {
                const newMessage = {
                    text: state.innerInput,
                    id: '1',
                    myMsg: true,
                }
                state.usersMsgData.push(newMessage)
            }
            break;

        case UPDATE_NEW_MESSAGE:
            state.innerInput = action.newText;
            break;

        default:
            break;
    }
    return state;
}


export const addMsgActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMsgActionCreator = (text = "") => ({
    type: UPDATE_NEW_MESSAGE,
    newText: text
})

export default dialogsReducer