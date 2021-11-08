import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { toggleOpenMenu } from "../../redux/reducers/SidebarReducer"
import "./Header.scss"

const Header = ({ isAuth, login, className, logoutThunkCreator }) => {
    const dispatch = useDispatch()
    const onClick = () => dispatch(toggleOpenMenu())
    const isMenuOpen = useSelector((state) => state.Sidebar.isOpen)

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
                    <button
                        onClick={onClick}
                        className={`login-btn__menu-burger menu-burger ${
                            isMenuOpen ? "menu-burger--open" : ""
                        }`}
                    >
                        <div className={`menu-burger__body `}>
                            <div className='menu-burger__middle-stick'></div>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
