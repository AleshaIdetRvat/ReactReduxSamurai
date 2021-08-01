import { combineReducers, createStore } from "redux";
import DialogsReducer from "./reducers/DialogsReducer";
import ProfileReducer from "./reducers/ProfileReducer";
import SidebarReducer from "./reducers/SidebarReducer";

const reducerS = combineReducers({
    Messages: DialogsReducer,
    Profile: ProfileReducer,
    Sidebar: SidebarReducer,
});

const reduxStore = createStore(reducerS);

window.store = reduxStore;

export default reduxStore;
