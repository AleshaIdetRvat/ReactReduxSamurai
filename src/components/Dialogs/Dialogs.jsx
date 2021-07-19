import React from 'react'
import Person from './Person/Person'
import './Dialogs.scss'
import Message from './Message/Message'

const Dialogs = (props) => {

    let usersElements = props.dialogsData.usersData.map(user => <Person Name={user.name} personId={user.id} />)

    let usersMsgElements = props.dialogsData.usersMsgData.map(msg => <Message Text={msg.text} myMsg={msg.myMsg} />)

    let newMessageRef = React.createRef();

    const clickSend = () => {
        props.dispatch({
            type: "ADD-MESSAGE"
        });
        props.dispatch({
            type: "UPDATE-NEW-MESSAGE",
            newText: ""
        });
    }
    const changeInput = () => {
        let innerInputNew = newMessageRef.current.value;
        props.dispatch({
            type: "UPDATE-NEW-MESSAGE",
            newText: innerInputNew
        });

    }

    return (
        <div class="dialogs">
            <div class="dialogs__body">
                <div class="dialogs__grid">

                    <div class="dialogs__sidebar dial-sidebar">
                        <div class="dial-sidebar__grid">

                            {usersElements}

                        </div>
                    </div>

                    <div class="dialogs__chat chat">
                        <div class="chat__body">

                            <div class="chat__messageS messageS">
                                <div class="messageS__grid">

                                    {usersMsgElements}


                                </div>
                            </div>

                            <div class="chat__send send">
                                <div class="send__grid">
                                    <input onChange={changeInput} ref={newMessageRef} value={props.dialogsData.innerInput} placeholder="Your message" class="send__input" />
                                    <button onClick={clickSend} class="send__btn">Send</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dialogs
