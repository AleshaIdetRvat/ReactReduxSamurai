import {
    setUsers,
    setCurrentPage,
    endFetching,
    fetching,
    followingInProgress,
    getUsersThuckCreator,
    unfollowThunkCreator,
    followThunkCreator,
} from "../../redux/reducers/UsersPageReducer";

import { connect } from "react-redux";

import UsersPageAPIContainer from "./UsersPageAPIContainer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => ({
    users: state.UsersPage.users,
    pageSize: state.UsersPage.pageSize,
    currentPage: state.UsersPage.currentPage,
    totalUsersCount: state.UsersPage.totalUsersCount,
    isFetching: state.UsersPage.isFetchingData,
    followingInProgressState: state.UsersPage.followingInProgressState,
    isAuth: state.Auth.isAuth,
});

const mapDispatchToProps = {
    endFetching,
    fetching,
    setUsers,
    setCurrentPage,
    followingInProgress,
    getUsersThuckCreator,
    unfollowThunkCreator,
    followThunkCreator,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersPageAPIContainer);
