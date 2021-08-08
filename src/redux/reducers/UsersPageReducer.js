const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const defaultState = {
    users: [],
    pageSize: 6,
    currentPage: 1,
    totalUsersCount: 0,
};

const UsersPageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            };
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) =>
                    action.userId === user.id ? { ...user, followed: true } : user
                ),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) =>
                    action.userId === user.id ? { ...user, followed: false } : user
                ),
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };
        default:
            return state;
    }
};

export const setCurrentPageAC = (page) => ({
    type: SET_CURRENT_PAGE,
    page: page,
});

export const followAC = (userId) => ({
    type: FOLLOW,
    userId: userId,
});

export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId: userId,
});

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users: users,
});

export default UsersPageReducer;
