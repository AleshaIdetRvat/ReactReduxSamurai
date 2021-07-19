import React from 'react'
import { render } from 'react-dom'

import '../src/index.scss';

import { store } from '../src/redux/state'
import App from '../src/components/App';
//import rerenderTree from '../src/render';

const rerenderTree = (state) => {
    render(
        <App appState={state}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById("root")
    )
}

rerenderTree(store.getState());

store.subscribe(rerenderTree);

