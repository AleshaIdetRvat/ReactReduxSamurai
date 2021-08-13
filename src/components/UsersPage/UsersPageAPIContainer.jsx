import React from "react";
import Preloader from "../common/Preloader/Preloader";
import UsersPage from "./UsersPage";
import { requestUsersData } from "../api/api";

class UsersPageClass extends React.Component {
    getUsers(currentPage = this.props.currentPage, pageSize = this.props.pageSize) {
        this.props.fetching();

        requestUsersData(currentPage, pageSize).then((data) => {
            this.props.endFetching();
            this.props.setUsers(
                data.items.map((user) => {
                    return {
                        id: user.id,
                        fullname: user.name,
                        location: {
                            contry: "Russia",
                            city: "Moscow",
                        },
                        status: user.status,
                        followed: user.followed,
                        avatar: user.photos.small,
                    };
                })
            );
        });
    }

    componentDidMount() {
        this.getUsers();
    }
    selectPage = (pageNum) => {
        this.props.setCurrentPage(this.props.currentPage + pageNum);
        this.getUsers(this.props.currentPage + pageNum);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader />
                ) : (
                    <UsersPage
                        isFetching={this.props.isFetching}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        selectPage={this.selectPage}
                    />
                )}
            </>
        );
    }
}

export default UsersPageClass;
