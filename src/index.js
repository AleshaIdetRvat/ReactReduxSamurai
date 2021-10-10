import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"

import "../src/index.scss"

import reduxStore from "./redux/reduxStore"
import App from "./components/App"

render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById("root")
)
