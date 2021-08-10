import * as axios from "axios";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import UsersPage from "./UsersPage";

class UsersPageClass extends React.Component {
    requestUsersData(
        currentPage = this.props.currentPage,
        pageSize = this.props.pageSize
    ) {
        this.props.fetching();
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
            )
            .then((response) => {
                this.props.endFetching();
                this.props.setUsers(
                    response.data.items.map((user) => {
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
        this.requestUsersData();
    }
    selectPage = (pageNum) => {
        this.props.setCurrentPage(this.props.currentPage + pageNum);
        this.requestUsersData(this.props.currentPage + pageNum);
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
