export const ADD_MESSAGE = "ADD-MESSAGE";
export const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const defaultState = {
    usersData: [
        { name: "Ivan Ivanov", id: "1" },
        { name: "Petya Kozlov", id: "2" },
        { name: "Nina Shpagina", id: "3" },
    ],

    usersMsgData: [
        { text: "tempText", id: "1", myMsg: true },
        { text: "tempText", id: "2", myMsg: false },
        { text: "tempText", id: "3", myMsg: false },
        { text: "tempText", id: "4", myMsg: false },
        { text: "tempText", id: "5", myMsg: true },
        { text: "tempText", id: "6", myMsg: false },
        { text: "tempText", id: "7", myMsg: true },
        { text: "tempText", id: "8", myMsg: false },
    ],
};

const DialogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (action.msg != "") {
                const newMessage = {
                    text: action.msg,
                    id: "4",
                    myMsg: true,
                };
                return {
                    ...state,
                    usersMsgData: [...state.usersMsgData, newMessage],
                };
            }
            return state;

        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                innerInput: action.newText,
            };

        default:
            return state;
    }
};

export const addMsg = (msg) => ({ type: ADD_MESSAGE, msg });

export default DialogsReducer;
