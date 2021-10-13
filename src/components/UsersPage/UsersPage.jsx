import React from "react"
import Preloader from "../common/Preloader/Preloader"
import "./UsersPage.scss"
import UsersPageItem from "./UsersPageItem/UsersPageItem"

const UsersPage = ({
    isFetching,
    users,
    currentPage,
    selectPage,
    followingInProgressState,
    unfollowThunkCreator,
    followThunkCreator,
    isAuth,
}) => {
    return (
        <>
            <Preloader loading={isFetching} />
            <div class="users-page">
                <div class="users-page__grid">
                    <ul class="users-page__select-page-btns select-page-btns">
                        {currentPage === 1 ? (
                            ""
                        ) : currentPage === 2 ? (
                            <li
                                onClick={() => selectPage(-1)}
                                className="select-page-btns__page-num"
                            >
                                {currentPage - 1}
                            </li>
                        ) : (
                            <>
                                <li
                                    onClick={() => selectPage(-2)}
                                    className="select-page-btns__page-num"
                                >
                                    {currentPage - 2}
                                </li>
                                <li
                                    onClick={() => selectPage(-1)}
                                    className="select-page-btns__page-num"
                                >
                                    {currentPage - 1}
                                </li>
                            </>
                        )}
                        <li className="select-page-btns__page-num selected-page">
                            {currentPage}
                        </li>
                        <li
                            onClick={() => selectPage(1)}
                            className="select-page-btns__page-num"
                        >
                            {currentPage + 1}
                        </li>
                        <li
                            onClick={() => selectPage(2)}
                            className="select-page-btns__page-num"
                        >
                            {currentPage + 2}
                        </li>
                        {currentPage === 1 ? (
                            <>
                                <li
                                    onClick={() => selectPage(3)}
                                    className="select-page-btns__page-num"
                                >
                                    {currentPage + 3}
                                </li>
                                <li
                                    onClick={() => selectPage(4)}
                                    className="select-page-btns__page-num"
                                >
                                    {currentPage + 4}
                                </li>
                            </>
                        ) : currentPage === 2 ? (
                            <li
                                onClick={() => selectPage(3)}
                                className="select-page-btns__page-num"
                            >
                                {currentPage + 3}
                            </li>
                        ) : (
                            ""
                        )}
                    </ul>

                    <div class="users-page__body">
                        {users.map((user) => (
                            <UsersPageItem
                                id={user.id}
                                key={user.id}
                                fullname={user.fullname}
                                location={user.location}
                                status={user.status}
                                followed={user.followed}
                                avatar={user.avatar}
                                follow={() => followThunkCreator(user.id)}
                                unfollow={() => unfollowThunkCreator(user.id)}
                                followingInProgressState={() =>
                                    followingInProgressState.some(
                                        (userId) => userId === user.id
                                    ) || !isAuth
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersPage
