import Dialogs from "./Dialogs"
import { addMsg } from "../../redux/reducers/DialogsReducer"
import { connect } from "react-redux"
import withAuthRedirect from "../../hoc/withAuthRedirect"
import { compose } from "redux"

const mapStateToProps = (state) => ({
    dialogsData: state.Messages,
})

export default compose(connect(mapStateToProps, { addMsg }), withAuthRedirect)(Dialogs)
