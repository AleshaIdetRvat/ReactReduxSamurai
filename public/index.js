import React from 'react'
import { render } from 'react-dom'

import '../src/index.scss';

import store from '../src/redux/redux-store'
import App from '../src/components/App';

const rerenderTree = (state) => {
    render(
        <App appState={state}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById("root")
    )
}

rerenderTree(store.getState());

store.subscribe(() => {
    rerenderTree(store.getState())
});

