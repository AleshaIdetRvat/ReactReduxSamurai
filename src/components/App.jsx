import React, { useEffect } from "react"
import { HashRouter, Route } from "react-router-dom"
import { Switch, Redirect } from "react-router"
import { connect } from "react-redux"
import HeaderContainer from "./Header/HeaderContainer"
import Sidebar from "./Sidebar/Sidebar"
import News from "./News/News"
import DialogsContainer from "./Dialogs/DialogsContainer"
import UsersPageContainer from "./UsersPage/UsersPageContainer"
import ProfileContainer from "./Profile/ProfileContainer"
import Login from "./Login/Login"
import Preloader from "./common/Preloader/Preloader"
import { initializeApp } from "../redux/reducers/AppReducer"
import "../style/app.scss"
//
import "./api/newsApi"
//
const App = (props) => {
    const { initialized, initializeApp, isAuth } = props

    useEffect(initializeApp, [initializeApp])

    return (
        <HashRouter>
            <div class='app'>
                <Preloader loading={!initialized} />
                <HeaderContainer
                    className={initializeApp && "started-header"}
                />
                {isAuth && <Sidebar />}
                <div class='app__content'>
                    {isAuth ? (
                        <Switch>
                            <Route
                                path='/profile/:userId?'
                                render={() => <ProfileContainer />}
                            />
                            <Route
                                path='/dialogs'
                                exact
                                render={() => <DialogsContainer />}
                            />
                            <Route
                                path='/users'
                                exact
                                render={() => <UsersPageContainer />}
                            />
                            <Route path='/news' exact render={() => <News />} />
                            <Redirect to='/news' />
                        </Switch>
                    ) : (
                        <Switch>
                            <Route path='/login' render={() => <Login />} />
                            <Redirect to='/login' />
                        </Switch>
                    )}
                </div>
            </div>
        </HashRouter>
    )
}

const mapStateToProps = (state) => ({
    initialized: state.App.initialize,
    isAuth: state.Auth.isAuth,
})

export default connect(mapStateToProps, { initializeApp })(App)
