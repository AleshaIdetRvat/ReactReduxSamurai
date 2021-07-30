import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../style/app.scss";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import DialogsContainer from "./Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div class="app">
                <Header />
                <Sidebar />
                <div class="app__content">
                    <Route
                        path="/profile"
                        render={() => (
                            <Profile
                                profileData={props.appState.Profile}
                                dispatch={props.dispatch}
                            />
                        )}
                    />
                    <Route
                        path="/dialogs"
                        render={() => (
                            <DialogsContainer
                                dialogsData={props.appState.Messages}
                                dispatch={props.dispatch}
                            />
                        )}
                    />
                    <Route path="/news" component={News} />
                </div>
            </div>
        </BrowserRouter>
    );
};
export default App;
