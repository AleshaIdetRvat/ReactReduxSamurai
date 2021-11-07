import {
    setUsers,
    setCurrentPage,
    fetching,
    followingInProgress,
    getUsersThuckCreator,
    unfollowThunkCreator,
    followThunkCreator,
} from "../../redux/reducers/UsersPageReducer"

import { connect } from "react-redux"

import UsersPageAPIContainer from "./UsersPageAPIContainer"
import withAuthRedirect from "../../hoc/withAuthRedirect"
import { compose } from "redux"
import {
    getTotalUsersCountSelector,
    getUsersPageCurrentPage,
    getUsersPageFetchingState,
    getUsersPageFollowingInProgressStatee,
    getUsersPageSizeSelector,
    getUsersSelector,
} from "../../redux/reducers/selectors/users-selectors"

const mapStateToProps = (state) => ({
    users: getUsersSelector(state),
    pageSize: getUsersPageSizeSelector(state),
    currentPage: getUsersPageCurrentPage(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    isFetching: getUsersPageFetchingState(state),
    followingInProgressState: getUsersPageFollowingInProgressStatee(state),
    isAuth: state.Auth.isAuth,
})

const mapDispatchToProps = {
    fetching,
    setUsers,
    setCurrentPage,
    followingInProgress,
    getUsersThuckCreator,
    unfollowThunkCreator,
    followThunkCreator,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersPageAPIContainer)
