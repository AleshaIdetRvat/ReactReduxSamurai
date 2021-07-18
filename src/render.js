import React from 'react'
import { render } from 'react-dom'
import { addPost, updateNewPostText, addMessage, updateNewMessageText } from '../src/redux/state'
import App from './components/App'

const rerenderTree = (state) => {
    render(
        <App appState={state}
            addMessage={addMessage}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            updateNewMessageText={updateNewMessageText}
        />,
        document.getElementById("root")
    )
}

export default rerenderTree;