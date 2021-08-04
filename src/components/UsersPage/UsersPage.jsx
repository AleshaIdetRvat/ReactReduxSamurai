import React from "react";
import "./UsersPage.scss";
import UsersPageItem from "./UsersPageItem/UsersPageItem";

const UsersPage = ({ UsersPageData, follow, unfollow, setUsers }) => {
    if (UsersPageData.users.length === 0) {
        setUsers([
            {
                id: 1,
                fullname: "Alexey Maincraft",
                location: {
                    contry: "Russia",
                    city: "Moscow",
                },
                status: "Hello everybody",
                followed: false,
            },
            {
                id: 2,
                fullname: "Masha Osipova",
                location: {
                    contry: "Russia",
                    city: "Moscow",
                },
                status: "How are they?",
                followed: false,
            },
            {
                id: 3,
                fullname: "Nina Shpagina",
                location: {
                    contry: "Russia",
                    city: "Moscow",
                },
                status: "Good day!!!",
                followed: false,
            },
            {
                id: 4,
                fullname: "Vasya Rizgickov",
                location: {
                    contry: "Russia",
                    city: "Moscow",
                },
                status: "Hello everybody",
                followed: false,
            },
        ]);
    }

    let usersElement = UsersPageData.users.map((user) => (
        <UsersPageItem
            key={user.id}
            fullname={user.fullname}
            location={user.location}
            status={user.status}
            followed={user.followed}
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
                <button class="users-page__btn-showmore">show more</button>
            </div>
        </div>
    );
};

export default UsersPage;
