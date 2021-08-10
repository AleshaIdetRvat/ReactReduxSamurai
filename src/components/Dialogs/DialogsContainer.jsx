import React from "react";
import Dialogs from "./Dialogs";
import { addMsg, updateNewMsg } from "../../redux/reducers/DialogsReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsData: state.Messages,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addMsg: () => {
//             dispatch(addMsg  ());
//         },
//         updateInput: (innerInputNew) => {
//             dispatch(updateNewMsg  (innerInputNew));
//         },
//     };
// };

const DialogsContainer = connect(mapStateToProps, {
    addMsg,
    updateNewMsg,
})(Dialogs);

export default DialogsContainer;
