import React from "react";
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import {
    getUserPersonDataThunkCreator,
    getUserStatus,
    updateUserStatus,
} from "../../redux/reducers/ProfileReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        console.log("componentDidMount");
        this.props.getUserPersonDataThunkCreator(this.props.match.params.userId);
        this.props.getUserStatus(this.props.match.params.userId);
    }

    componentDidUpdate(prevState) {
        console.log("UPDATE");
        if (prevState.match.params.userId != this.props.match.params.userId) {
            this.props.getUserPersonDataThunkCreator(this.props.match.params.userId);
            this.props.getUserStatus(this.props.match.params.userId);
        }
    }

    render() {
        //console.log(this.props);
        console.log(
            this.props.match.params.userId,
            this.props.Profile.userProfileData.userId
        );
        return (
            <>
                {this.props.Profile.isFetching ? (
                    <Preloader />
                ) : (
                    <Profile
                        updateUserStatus={this.props.updateUserStatus}
                        userProfileData={this.props.Profile.userProfileData}
                        status={this.props.Profile.status}
                        isAuth={this.props.isAuth}
                        isMyProfile={this.props.myId == this.props.match.params.userId}
                    />
                )}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    Profile: state.Profile,
});

const mapDispatchToProps = {
    getUserPersonDataThunkCreator,
    getUserStatus,
    updateUserStatus,
};
//const uslId =
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter
)(ProfileContainer);
