import React from "react";
import { render } from "react-dom";
//import StoreContext from "../src/storeContext";

import "../src/index.scss";

import { store } from "../src/redux/store";
import reduxStore from "../src/redux/reduxStore";
import App from "../src/components/App";
import { Provider } from "react-redux";

render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById("root")
);
// reduxStore.subscribe(() => {
//     rerenderTree(reduxStore);
// });
