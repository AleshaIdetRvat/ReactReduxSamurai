import UsersPage from "./UsersPage";
import { followAC, unfollowAC, setUsersAC } from "../../redux/reducers/UsersPageReducer";

import { connect } from "react-redux";
import UsersPageClass from "./UsersPageClass";

const mapStateToProps = (state) => {
    return {
        UsersPageData: state.UsersPage,
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
    };
};

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPageClass);

export default UsersPageContainer;
