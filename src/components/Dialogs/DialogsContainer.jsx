import React from "react";
import Dialogs from "./Dialogs";
import {
    addMsgActionCreator,
    updateNewMsgActionCreator,
} from "../../redux/state";

const DialogsContainer = ({ dispatch, dialogsData }) => {
    const addMsg = () => {
        dispatch(addMsgActionCreator());
        dispatch(updateNewMsgActionCreator());
    };
    const updateInput = (innerInputNew) => {
        dispatch(updateNewMsgActionCreator(innerInputNew));
    };

    return (
        <Dialogs
            dialogsData={dialogsData}
            addMsg={addMsg}
            updateInput={updateInput}
        />
    );
};

export default DialogsContainer;
