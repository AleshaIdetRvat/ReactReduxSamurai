import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    endFetching,
    fetching,
} from "../../redux/reducers/UsersPageReducer";

import { connect } from "react-redux";
import UsersPageAPIContainer from "./UsersPageAPIContainer";

const mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        currentPage: state.UsersPage.currentPage,
        totalUsersCount: state.UsersPage.totalUsersCount,
        isFetching: state.UsersPage.isFetchingData,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         endFetching: () => {
//             dispatch(endFetching());
//         },
//         fetching: () => {
//             dispatch(fetching());
//         },
//         follow: (userId) => {
//             dispatch(follow(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users));
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPage(page));
//         },
//     };
// };

const UsersPageContainer = connect(mapStateToProps, {
    endFetching,
    fetching,
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
})(UsersPageAPIContainer);

export default UsersPageContainer;
