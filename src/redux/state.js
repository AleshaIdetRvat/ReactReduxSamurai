import dialogsReducer from "./dialogs_reducer"
import profileReducer from "./profile_reducer"
import sidebarReducer from "./sidebar_reducer"


const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST = "UPDATE-NEW-POST"
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"

export let store = {

    _state: {

        Messages: {
            usersData: [
                { name: "Ivan Ivanov", id: '1' },
                { name: "Petya Kozlov", id: '2' },
                { name: "Nina Shpagina", id: '3' }
            ],

            usersMsgData: [
                { text: "tempText", id: '1', myMsg: true },
                { text: "tempText", id: '2', myMsg: false },
                { text: "tempText", id: '3', myMsg: false },
                { text: "tempText", id: '4', myMsg: false },
                { text: "tempText", id: '5', myMsg: true },
                { text: "tempText", id: '6', myMsg: false },
                { text: "tempText", id: '7', myMsg: true },
                { text: "tempText", id: '8', myMsg: false },
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

        Sidebar: {

        }

    },

    dispatch(action) {
        //////////First option
        const updatedState = {
            Messages: dialogsReducer(this._state.Messages, action),
            Profile: profileReducer(this._state.Profile, action),
            Sidebar: sidebarReducer(this._state.Sidebar, action),
        }
        this._callSubscriber(updatedState)

        //////////Second option
        //this._state.Messages = dialogsReducer(this._state.Messages, action)
        //this._state.Profile = profileReducer(this._state.Profile, action)
        //this._state.Sidebar = sidebarReducer(this._state.Sidebar, action)
        //this._callSubscriber(this._state)
    },

    getState() {
        return this._state;
    },

    _callSubscriber() { },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}
