import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import AuthReducer from "./reducers/AuthReducer"
import DialogsReducer from "./reducers/DialogsReducer"
import ProfileReducer from "./reducers/ProfileReducer"
import SidebarReducer from "./reducers/SidebarReducer"
import UsersPageReducer from "./reducers/UsersPageReducer"
import thunk from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import AppReducer from "./reducers/AppReducer"

const reducerS = combineReducers({
    Messages: DialogsReducer, ///
    Profile: ProfileReducer, ///  Можно воспринимать как STATE
    Sidebar: SidebarReducer, ///
    UsersPage: UsersPageReducer,
    Auth: AuthReducer,
    form: formReducer,
    App: AppReducer,
})

const composeExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reduxStore = createStore(reducerS, composeExtension(applyMiddleware(thunk)))

window.reduxStore = reduxStore

export default reduxStore
