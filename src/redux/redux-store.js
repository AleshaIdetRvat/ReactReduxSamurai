import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";

let redusers = combineReducers({
    Profile: profileReducer,
    Messages: dialogsReducer,
    Sidebar: sidebarReducer
})

let store = createStore(redusers)

export default store