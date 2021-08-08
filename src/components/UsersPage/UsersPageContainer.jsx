import UsersPage from "./UsersPage";
import {
    followAC,
    unfollowAC,
    setUsersAC,
    setCurrentPageAC,
} from "../../redux/reducers/UsersPageReducer";

import { connect } from "react-redux";
import UsersPageAPIContainer from "./UsersPageAPIContainer";

const mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        currentPage: state.UsersPage.currentPage,
        totalUsersCount: state.UsersPage.totalUsersCount,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
    };
};

const UsersPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersPageAPIContainer);

export default UsersPageContainer;
