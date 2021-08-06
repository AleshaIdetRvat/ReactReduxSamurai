import * as axios from "axios";
import React from "react";
import "./UsersPage.scss";
import UsersPageItem from "./UsersPageItem/UsersPageItem";

const UsersPage = ({ UsersPageData, follow, unfollow, setUsers }) => {
    if (UsersPageData.users.length === 0) {
    }

    const addUsers = () => {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                setUsers(
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
    };

    let usersElement = UsersPageData.users.map((user) => (
        <UsersPageItem
            key={user.id}
            fullname={user.fullname}
            location={user.location}
            status={user.status}
            followed={user.followed}
            avatar={user.avatar}
            follow={() => {
                follow(user.id);
            }}
            unfollow={() => {
                unfollow(user.id);
            }}
        />
    ));

    return (
        <div class="users-page">
            <div class="users-page__grid">
                <div class="users-page__body">{usersElement}</div>
                <button onClick={addUsers} class="users-page__btn-showmore">
                    show more
                </button>
            </div>
        </div>
    );
};

export default UsersPage;
