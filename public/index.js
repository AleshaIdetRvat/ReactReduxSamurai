import React from 'react'
import { render } from 'react-dom'

import '../src/index.scss';

import { store } from '../src/redux/state'
import App from '../src/components/App';
//import rerenderTree from '../src/render';

const rerenderTree = (state) => {
    render(
        <App appState={state}
            addMessage={store.addMessage.bind(store)}
            addPost={store.addPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
            updateNewMessageText={store.updateNewMessageText.bind(store)}
        />,
        document.getElementById("root")
    )
}

rerenderTree(store.getState());

store.subscribe(rerenderTree);

