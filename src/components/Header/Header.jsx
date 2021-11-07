import React from "react"
import { NavLink } from "react-router-dom"
import "./Header.scss"

const Header = ({ isAuth, login, className, logoutThunkCreator }) => {
    return (
        <header className={`header ${className}`}>
            <div className='header__body'>
                <div className='header__grid'>
                    <div className='header__logo header-logo'>
                        <span className='header-logo__text'>
                            <i className='header-logo__letter1'>S</i>
                            <i className='header-logo__letter2'>N</i>
                        </span>
                    </div>

                    <div className='header__login header-login'>
                        <div className='header-login__body'>
                            <NavLink to='/login'>{isAuth ? login : ""}</NavLink>
                        </div>
                    </div>
                    {isAuth && (
                        <div class='logout'>
                            <button
                                class='login-btn'
                                onClick={logoutThunkCreator}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
