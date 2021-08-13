import React from "react";
import { NavLink } from "react-router-dom";
import "./UsersPageItem.scss";
const UsersPageItem = ({
    fullname,
    location,
    status,
    followed,
    follow,
    unfollow,
    avatar,
    id,
}) => {
    return (
        <div class="users-page__item users-page-item">
            <div class="users-page-item__body">
                <div class="users-page-item__grid">
                    <NavLink class="users-page-item__avatar" to={`/profile/${id}`}>
                        {avatar ? <img src={avatar} /> : ""}
                    </NavLink>

                    <div class="users-page-item__status status-grid">
                        <div class="status-grid__name">{fullname}</div>
                        <div class="status-grid__contry">{location.contry},</div>
                        <div class="status-grid__city">{location.city}</div>
                        <div class="status-grid__myself">{status}</div>
                    </div>

                    <div class="users-page-item__follow">
                        {followed ? (
                            <button
                                onClick={unfollow}
                                class="users-page-item__follow-btn unfollow-btn"
                            >
                                unfollow
                            </button>
                        ) : (
                            <button onClick={follow} class="users-page-item__follow-btn">
                                follow
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersPageItem;
