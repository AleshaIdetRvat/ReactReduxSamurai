import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <nav class="sidebar">
            <div class="sidebar__body">
                <ul class="sidebar__grid">
                    <li class="sidebar__item">
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li class="sidebar__item">
                        <NavLink to="/dialogs">Messages</NavLink>
                    </li>
                    <li class="sidebar__item">
                        <NavLink to="/users">Find Users</NavLink>
                    </li>
                    <li class="sidebar__item">
                        <NavLink to="/news">News</NavLink>
                    </li>
                    <li class="sidebar__item">
                        <NavLink to="">Music</NavLink>
                    </li>
                    <li class="sidebar__item">
                        <NavLink to="">Settings</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
