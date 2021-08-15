import ProfileReducer from "./reducers/ProfileReducer";
import DialogsReducer from "./reducers/DialogsReducer";
import SidebarReducer from "./reducers/SidebarReducer";

export let store = {
    _state: {
        Messages: {
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
        },

        Profile: {
            postsData: [
                { id: 1, likes_count: "34", message: "Hello everybody" },
                { id: 2, likes_count: "5", message: "How are they?" },
                { id: 3, likes_count: "12", message: "Good day!!!" },
                { id: 4, likes_count: "34", message: "Hello everybody" },
                { id: 5, likes_count: "5", message: "How are they?" },
                { id: 6, likes_count: "12", message: "Good day!!!" },
            ],
            innerTextarea: "",
        },
        Sidebar: {},
    },

    dispatch(action) {
        this._state.Profile = ProfileReducer(this._state.Profile, action);
        this._state.Messages = DialogsReducer(this._state.Messages, action);
        this._state.Sidebar = SidebarReducer(this._state.Sidebar, action);

        this._callBackRerender(store);
    },

    getState() {
        return this._state;
    },

    _callBackRerender() {},
    /////////

    subscribe(observer) {
        this._callBackRerender = observer;
    },
};
const ADD_CREATOR = "ADD_CREATOR";

const addMsgActionCreator = (msg) => ({
    type: "ADD_MSG",
    msg: msg,
});
