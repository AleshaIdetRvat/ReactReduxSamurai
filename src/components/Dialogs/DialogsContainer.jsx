import React from "react";
import Dialogs from "./Dialogs";
import {
    addMsgActionCreator,
    updateNewMsgActionCreator,
} from "../../redux/reducers/DialogsReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsData: state.Messages,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMsg: () => {
            dispatch(addMsgActionCreator());
        },
        updateInput: (innerInputNew) => {
            dispatch(updateNewMsgActionCreator(innerInputNew));
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
