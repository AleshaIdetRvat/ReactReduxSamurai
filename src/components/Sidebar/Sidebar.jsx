import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { compose } from "redux";
import "./Sidebar.scss";

const Sidebar = (props) => {
    console.log(props);
    return (
        <nav class="sidebar">
            <div class="sidebar__body">
                <ul class="sidebar__grid">
                    <li class="sidebar__item">
                        <NavLink to={`/profile/${props.UserId}`}>Profile</NavLink>
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

const mapStateToProps = (state) => ({
    UserId: state.Auth.userId,
});

export default connect(mapStateToProps, {})(Sidebar);
