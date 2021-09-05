import { applyMiddleware, combineReducers, createStore } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import DialogsReducer from "./reducers/DialogsReducer";
import ProfileReducer from "./reducers/ProfileReducer";
import SidebarReducer from "./reducers/SidebarReducer";
import UsersPageReducer from "./reducers/UsersPageReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const reducerS = combineReducers({
    Messages: DialogsReducer, ///
    Profile: ProfileReducer, ///  Можно воспринимать как STATE
    Sidebar: SidebarReducer, ///
    UsersPage: UsersPageReducer,
    Auth: AuthReducer,
    form: formReducer,
});

const reduxStore = createStore(reducerS, applyMiddleware(thunk));

window.reduxStore = reduxStore;

export default reduxStore;
