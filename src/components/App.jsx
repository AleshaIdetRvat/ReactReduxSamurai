import React, { useEffect } from "react"
import { BrowserRouter, Route } from "react-router-dom"
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

function showMeThis() {
    return this
}

console.log(showMeThis)

const App = (props) => {
    const { initialized, initializeApp, isAuth, isFetching } = props

    const isShowPreloader = !initialized || isFetching

    useEffect(() => {
        initializeApp()
    }, [initializeApp])

    return (
        <BrowserRouter>
            <div class="app">
                <Preloader loading={isShowPreloader} />
                <HeaderContainer className={initializeApp && "started-header"} />
                {isAuth && <Sidebar />}
                <div class="app__content">
                    <Switch>
                        <Route path="/login" render={() => <Login />} />

                        {isAuth ? (
                            <>
                                <Route
                                    path="/profile/:userId?"
                                    render={() => <ProfileContainer />}
                                />

                                <Route
                                    path="/dialogs"
                                    render={() => <DialogsContainer />}
                                />

                                <Route
                                    path="/users"
                                    render={() => <UsersPageContainer />}
                                />

                                <Route path="/news" render={() => <News />} />

                                <Redirect to="/profile" />
                            </>
                        ) : (
                            <Redirect to="/login" />
                        )}
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => ({
    initialized: state.App.initialize,
    isAuth: state.Auth.isAuth,
    isFetching: state.Auth.isFetching,
})

export default connect(mapStateToProps, { initializeApp })(App)

/*

<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
<Route path="/dialogs" render={() => <DialogsContainer />} />
<Route path="/users" render={() => <UsersPageContainer />} />
<Route path="/news" render={() => <News />} />
<Route path="/login" render={() => <Login />} />

*/
