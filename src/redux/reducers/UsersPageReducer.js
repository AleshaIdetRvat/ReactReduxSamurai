export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";

const defaultState = {
    users: [],
};

const UsersPageReducer = (state = defaultState, action) => {
    switch (action.type) {
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
                users: [...state.users, ...action.users],
            };
        default:
            return state;
    }
};

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
