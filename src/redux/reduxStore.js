import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import AuthReducer from "./reducers/AuthReducer"
import DialogsReducer from "./reducers/DialogsReducer"
import ProfileReducer from "./reducers/ProfileReducer"
import SidebarReducer from "./reducers/SidebarReducer"
import UsersPageReducer from "./reducers/UsersPageReducer"
import thunk from "redux-thunk"
import AppReducer from "./reducers/AppReducer"
import NewsReducer from "./reducers/NewsReducer"

const reducerS = combineReducers({
    Messages: DialogsReducer,
    Profile: ProfileReducer,
    Sidebar: SidebarReducer,
    UsersPage: UsersPageReducer,
    Auth: AuthReducer,
    App: AppReducer,
    News: NewsReducer,
})

const composeExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reduxStore = createStore(
    reducerS,
    composeExtension(applyMiddleware(thunk))
)

window.reduxStore = reduxStore

export default reduxStore
