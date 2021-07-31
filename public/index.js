import React from "react";
import { render } from "react-dom";
//import StoreContext from "../src/storeContext";

import "../src/index.scss";

import { store } from "../src/redux/store";
import reduxStore from "../src/redux/reduxStore";
import App from "../src/components/App";
import { Provider } from "react-redux";

const rerenderTree = (store) => {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
};

rerenderTree(reduxStore);

reduxStore.subscribe(() => {
    rerenderTree(reduxStore);
});
