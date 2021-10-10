import React from "react"
import { NavLink } from "react-router-dom"

import "./Header.scss"

const Header = ({ isAuth, login }) => {
    return (
        <header class="header">
            <div class="header__body">
                <div class="header__grid">
                    <div class="header__logo"></div>
                    <div className="header__login header-login">
                        <div className="header-login__body">
                            <NavLink to="/login">{isAuth ? login : ""}</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
