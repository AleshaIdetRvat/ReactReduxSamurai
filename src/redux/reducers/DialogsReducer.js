import { ADD_MESSAGE, UPDATE_NEW_MESSAGE } from "../store";

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
    innerInput: "",
};

const DialogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.innerInput != "") {
                const newMessage = {
                    text: state.innerInput,
                    id: "1",
                    myMsg: true,
                };

                state.usersMsgData.push(newMessage);
            }
            break;

        case UPDATE_NEW_MESSAGE:
            state.innerInput = action.newText;
            break;

        default:
            break;
    }
    return state;
};
export default DialogsReducer;
