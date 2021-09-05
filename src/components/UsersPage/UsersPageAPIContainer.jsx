import React from "react";
import Preloader from "../common/Preloader/Preloader";
import UsersPage from "./UsersPage";
import { usersAPI } from "../api/api";

class UsersPageAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThuckCreator(this.props.currentPage, this.props.pageSize);
    }
    selectPage = (pageNum) => {
        this.props.setCurrentPage(this.props.currentPage + pageNum);
        this.props.getUsersThuckCreator(
            this.props.currentPage + pageNum,
            this.props.pageSize
        );
    };

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader />
                ) : (
                    <UsersPage
                        isAuth={this.props.isAuth}
                        isFetching={this.props.isFetching}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        selectPage={this.selectPage}
                        followingInProgress={this.props.followingInProgress}
                        followingInProgressState={this.props.followingInProgressState}
                        unfollowThunkCreator={this.props.unfollowThunkCreator}
                        followThunkCreator={this.props.followThunkCreator}
                    />
                )}
            </>
        );
    }
}

export default UsersPageAPIContainer;
