import React from "react";
import Person from "./Person/Person";
import "./Dialogs.scss";
import Message from "./Message/Message";

import PropTypes from "prop-types";

const Dialogs = ({ dialogsData, addMsg, updateNewMsg }) => {
    //debugger;
    let usersElements = dialogsData.usersData.map((user) => (
        <Person Name={user.name} personId={user.id} key={user.id} />
    ));

    let usersMsgElements = dialogsData.usersMsgData.map((msg) => (
        <Message Text={msg.text} myMsg={msg.myMsg} key={msg.id} />
    ));

    let newMessageRef = React.createRef();

    const clickSend = () => {
        addMsg();
    };
    const changeInput = () => {
        let innerInputNew = newMessageRef.current.value;
        updateNewMsg(innerInputNew);
    };

    return (
        <div class="dialogs">
            <div class="dialogs__body">
                <div class="dialogs__grid">
                    <div class="dialogs__sidebar dial-sidebar">
                        <div class="dial-sidebar__grid">{usersElements}</div>
                    </div>

                    <div class="dialogs__chat chat">
                        <div class="chat__body">
                            <div class="chat__messageS messageS">
                                <div class="messageS__grid">{usersMsgElements}</div>
                            </div>

                            <div class="chat__send send">
                                <div class="send__grid">
                                    <input
                                        onChange={changeInput}
                                        ref={newMessageRef}
                                        value={dialogsData.innerInput}
                                        placeholder="Your message"
                                        class="send__input"
                                    />
                                    <button onClick={clickSend} class="send__btn">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Dialogs.propTypes = {
    dialogsData: PropTypes.shape({
        usersData: PropTypes.array,
        usersMsgData: PropTypes.array,
        innerInput: PropTypes.string,
    }).isRequired,
};

export default Dialogs;
