const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const FETCHING_DATA = "FETCHING_DATA";
const END_FETCHING_DATA = "END_FETCHING_DATA";

const defaultState = {
    users: [],
    pageSize: 6,
    currentPage: 1,
    totalUsersCount: 0,
    isFetchingData: false,
};

const UsersPageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                isFetchingData: true,
            };
        case END_FETCHING_DATA:
            return {
                ...state,
                isFetchingData: false,
            };
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

export const fetching = () => ({
    type: FETCHING_DATA,
});

export const endFetching = () => ({
    type: END_FETCHING_DATA,
});

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    page: page,
});

export const follow = (userId) => ({
    type: FOLLOW,
    userId: userId,
});

export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId: userId,
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users: users,
});

export default UsersPageReducer;
