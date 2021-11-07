import React from "react"
import { connect } from "react-redux"
import Preloader from "../common/Preloader/Preloader"
import Profile from "./Profile"
import { withRouter } from "react-router-dom"
import {
    getUserPersonDataThunkCreator,
    getUserStatus,
    updateUserStatus,
    updateAvatarTC,
    toggleSetFetching,
} from "../../redux/reducers/ProfileReducer"
import withAuthRedirect from "../../hoc/withAuthRedirect"
import { compose } from "redux"

class ProfileContainer extends React.Component {
    refreshProfile() {
        this.props.getUserPersonDataThunkCreator(this.props.match.params.userId)
        this.props.getUserStatus(this.props.match.params.userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId != this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <>
                <Preloader loading={this.props.Profile.isFetching} />

                <Profile
                    toggleSetFetching={this.props.toggleSetFetching}
                    updateAvatar={this.props.updateAvatarTC}
                    updateUserStatus={this.props.updateUserStatus}
                    userProfileData={this.props.Profile.userProfileData}
                    status={this.props.Profile.status}
                    isAuth={this.props.isAuth}
                    isMyProfile={
                        this.props.myId == this.props.match.params.userId
                    }
                />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    Profile: state.Profile,
})

const mapDispatchToProps = {
    getUserPersonDataThunkCreator,
    getUserStatus,
    updateUserStatus,
    updateAvatarTC,
    toggleSetFetching,
}
//const uslId =
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter
)(ProfileContainer)
