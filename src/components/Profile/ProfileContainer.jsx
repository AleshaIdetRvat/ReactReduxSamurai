import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import Profile from "./Profile";
import { setUserProfile, toggleSetFetching } from "../../redux/reducers/ProfileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
    requestUserPersonalData() {
        console.log(this.props);
        this.props.toggleSetFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${
                    this.props.match.params.userId || 2
                }`
            )
            .then((response) => {
                debugger;
                this.props.setUserProfile(response.data);
                this.props.toggleSetFetching(false);
            });
    }

    componentDidMount() {
        this.requestUserPersonalData();
    }

    render() {
        return (
            <>
                {this.props.Profile.isFetching ? (
                    <Preloader />
                ) : (
                    <Profile userProfileData={this.props.Profile.userProfileData} />
                )}
            </>
        );
    }
}

const withUrlDataProfileContainer = withRouter(ProfileContainer);

const mapStateToProps = (state) => ({
    Profile: state.Profile,
});

export default connect(mapStateToProps, {
    setUserProfile,
    toggleSetFetching,
})(withUrlDataProfileContainer);
