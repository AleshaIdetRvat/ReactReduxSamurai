import React from "react";
import Dialogs from "./Dialogs";
import {
    addMsgActionCreator,
    updateNewMsgActionCreator,
} from "../../redux/store";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {
    debugger;
    return (
        <StoreContext.Consumer>
            {(store) => {
                const addMsg = () => {
                    store.dispatch(addMsgActionCreator());
                    store.dispatch(updateNewMsgActionCreator());
                };
                const updateInput = (innerInputNew) => {
                    store.dispatch(updateNewMsgActionCreator(innerInputNew));
                };
                const dialogsData = store.getState().Messages;
                //
                return (
                    <Dialogs
                        dialogsData={dialogsData}
                        addMsg={addMsg}
                        updateInput={updateInput}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
