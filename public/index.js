import React from "react";
import { render } from "react-dom";
import StoreContext from "../src/storeContext";

import "../src/index.scss";

import { store } from "../src/redux/store";
import reduxStore from "../src/redux/reduxStore";
import App from "../src/components/App";

const rerenderTree = (store) => {
    render(
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>,
        document.getElementById("root")
    );
};

rerenderTree(reduxStore);

reduxStore.subscribe(() => {
    rerenderTree(reduxStore);
});
