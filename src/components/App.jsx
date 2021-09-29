import React, { useEffect } from "react"
import { BrowserRouter, Route } from "react-router-dom"

import "../style/app.scss"

import HeaderContainer from "./Header/HeaderContainer"
import Sidebar from "./Sidebar/Sidebar"
import News from "./News/News"
import DialogsContainer from "./Dialogs/DialogsContainer"
import UsersPageContainer from "./UsersPage/UsersPageContainer"
import ProfileContainer from "./Profile/ProfileContainer"
import Login from "./Login/Login"

import { connect } from "react-redux"
import { initializeApp } from "../redux/reducers/AppReducer"
import Preloader from "./common/Preloader/Preloader"

const App = (props) => {
    const { initialized, initializeApp } = props

    useEffect(() => {
        initializeApp()
    }, [initializeApp])

    if (!initialized) return <Preloader />

    return (
        <BrowserRouter>
            <div class="app">
                <HeaderContainer />
                <Sidebar />
                <div class="app__content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

                    <Route path="/dialogs" render={() => <DialogsContainer />} />

                    <Route path="/users" render={() => <UsersPageContainer />} />

                    <Route path="/news" render={() => <News />} />
                    <Route path="/login" render={() => <Login />} />
                </div>
            </div>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => ({
    initialized: state.App.initialize,
})

export default connect(mapStateToProps, { initializeApp })(App)
