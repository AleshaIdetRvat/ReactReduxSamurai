import React from 'react'

import './Message.scss'

const Message = (props) => {
    return (
        <div class={props.myMsg
            ? "messageS__item message my-message"
            : "messageS__item message"} >

            <div class="message__body">
                <div class="message__text">{props.Text}</div>
            </div>
        </div >
    )
}

export default Message
