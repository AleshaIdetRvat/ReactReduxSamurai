import * as axios from "axios";
import React from "react";
import "./UsersPage.scss";
import UsersPageItem from "./UsersPageItem/UsersPageItem";

class UsersPageClass extends React.Component {
    constructor(props) {
        super(props);
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
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

    // usersElement = this.props.UsersPageData.users.map((user) => (
    //     <div class="users-page__item users-page-item">
    //         <div class="users-page-item__body">
    //             <div class="users-page-item__grid">
    //                 {user.avatar ? (
    //                     <img src={user.avatar} />
    //                 ) : (
    //                     <div class="users-page-item__avatar"></div>
    //                 )}

    //                 <div class="users-page-item__status status-grid">
    //                     <div class="status-grid__name">{user.fullname}</div>
    //                     <div class="status-grid__contry">{user.location.contry},</div>
    //                     <div class="status-grid__city">{user.location.city}</div>
    //                     <div class="status-grid__myself">{user.status}</div>
    //                 </div>

    //                 <div class="users-page-item__follow">
    //                     {user.followed ? (
    //                         <button
    //                             onClick={user.unfollow}
    //                             class="users-page-item__follow-btn"
    //                         >
    //                             unfollow
    //                         </button>
    //                     ) : (
    //                         <button
    //                             onClick={user.follow}
    //                             class="users-page-item__follow-btn"
    //                         >
    //                             follow
    //                         </button>
    //                     )}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // ));

    render() {
        return (
            <div class="users-page">
                <div class="users-page__grid">
                    <div class="users-page__body">
                        {this.props.UsersPageData.users.map((user) => (
                            <div class="users-page__item users-page-item">
                                <div class="users-page-item__body">
                                    <div class="users-page-item__grid">
                                        {user.avatar ? (
                                            <img src={user.avatar} />
                                        ) : (
                                            <div class="users-page-item__avatar"></div>
                                        )}

                                        <div class="users-page-item__status status-grid">
                                            <div class="status-grid__name">
                                                {user.fullname}
                                            </div>
                                            <div class="status-grid__contry">
                                                {user.location.contry},
                                            </div>
                                            <div class="status-grid__city">
                                                {user.location.city}
                                            </div>
                                            <div class="status-grid__myself">
                                                {user.status}
                                            </div>
                                        </div>

                                        <div class="users-page-item__follow">
                                            {user.followed ? (
                                                <button
                                                    onClick={user.unfollow}
                                                    class="users-page-item__follow-btn"
                                                >
                                                    unfollow
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={user.follow}
                                                    class="users-page-item__follow-btn"
                                                >
                                                    follow
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button class="users-page__btn-showmore">show more</button>
                </div>
            </div>
        );
    }
}

export default UsersPageClass;
