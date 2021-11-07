import React from "react"
import { connect } from "react-redux"
import { NavLink, withRouter } from "react-router-dom"
import { compose } from "redux"
import "./Sidebar.scss"

const Sidebar = (props) => {
    return (
        <nav class='sidebar'>
            <div class='sidebar__body'>
                <ul class='sidebar__grid'>
                    <NavLink
                        activeClassName='selected'
                        to={`/profile/${props.UserId}`}
                        className='sidebar__item'
                    >
                        <span>Profile</span>
                    </NavLink>
                    <NavLink
                        activeClassName='selected'
                        to='/dialogs'
                        className='sidebar__item'
                    >
                        <span>Messages</span>
                    </NavLink>
                    <NavLink
                        activeClassName='selected'
                        to='/users'
                        className='sidebar__item'
                    >
                        <span>Find Users</span>
                    </NavLink>

                    <NavLink
                        activeClassName='selected'
                        to='/news'
                        className='sidebar__item'
                    >
                        <span>News</span>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    UserId: state.Auth.userId,
})

export default connect(mapStateToProps, {})(Sidebar)
