import { combineReducers, createStore } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import DialogsReducer from "./reducers/DialogsReducer";
import ProfileReducer from "./reducers/ProfileReducer";
import SidebarReducer from "./reducers/SidebarReducer";
import UsersPageReducer from "./reducers/UsersPageReducer";

const reducerS = combineReducers({
    Messages: DialogsReducer, ///!!!
    Profile: ProfileReducer, /// !!! Можно воспринимать как STATE
    Sidebar: SidebarReducer, /// !!!
    UsersPage: UsersPageReducer,
    Auth: AuthReducer,
});

const reduxStore = createStore(reducerS);

export default reduxStore;
