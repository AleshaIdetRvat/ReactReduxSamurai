import React from "react"
import Person from "./Person/Person"
import "./Dialogs.scss"
import Message from "./Message/Message"
import { Field, reduxForm } from "redux-form"
import MyTextarea from "../common/FormsControl/MyTextarea"
import { required, maxLenghtCreator } from "../utils/validators/validators"
import PropTypes from "prop-types"

const maxLenght20 = maxLenghtCreator(20) //оалдыва ПРолиофыдлва

const NewMsgForm = ({ onSubmit, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} class="send__grid">
            <Field
                isInput={true}
                component={MyTextarea}
                validate={[required, maxLenght20]}
                name="message"
                type="text"
                placeholder="Your message"
                class="send__input"
            />
            <button class="send__btn">Send</button>
        </form>
    )
}

const NewMsgReduxForm = reduxForm({ form: "newMsg" })(NewMsgForm)

const Dialogs = ({ dialogsData, addMsg }) => {
    const onSubmitMsg = (newMsgFormData) => {
        console.log(newMsgFormData.message)
        addMsg(newMsgFormData.message)
    }

    let usersElements = dialogsData.usersData.map((user) => (
        <Person Name={user.name} personId={user.id} key={user.id} />
    ))

    let usersMsgElements = dialogsData.usersMsgData.map((msg) => (
        <Message Text={msg.text} myMsg={msg.myMsg} key={msg.id} />
    ))

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
                                <div class="messageS__grid">
                                    {usersMsgElements}
                                    {usersMsgElements}
                                    {usersMsgElements}
                                </div>
                            </div>

                            <div class="chat__send send">
                                <NewMsgReduxForm onSubmit={onSubmitMsg} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Dialogs.propTypes = {
    dialogsData: PropTypes.shape({
        usersData: PropTypes.array,
        usersMsgData: PropTypes.array,
        innerInput: PropTypes.string,
    }).isRequired,
}

export default Dialogs
