import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../style/app.scss";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Profile from "./Profile/Profile";
import News from "./News/News";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersPageContainer from "./UsersPage/UsersPageContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div class="app">
                <Header />
                <Sidebar />
                <div class="app__content">
                    <Route path="/profile" render={() => <Profile />} />

                    <Route path="/dialogs" render={() => <DialogsContainer />} />

                    <Route path="/users" render={() => <UsersPageContainer />} />

                    <Route path="/news" render={() => <News />} />
                </div>
            </div>
        </BrowserRouter>
    );
};
export default App;
