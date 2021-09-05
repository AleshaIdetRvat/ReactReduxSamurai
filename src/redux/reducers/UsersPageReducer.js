import { usersAPI } from "../../components/api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const FETCHING_DATA = "FETCHING_DATA";
const END_FETCHING_DATA = "END_FETCHING_DATA";
const TOGGLE_FOLLOW_IN_PROGRESS = "TOGGLE_FOLLOW_IN_PROGRESS";

const defaultState = {
    users: [],
    pageSize: 6,
    currentPage: 1,
    totalUsersCount: 0,
    isFetchingData: false,
    followingInProgressState: [],
};

const UsersPageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followingInProgressState: action.isFetching
                    ? [...state.followingInProgressState, action.userId]
                    : state.followingInProgressState.filter(
                          (userId) => userId != action.userId
                      ),
            };
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

export const followingInProgress = (isFetching, userId) => ({
    type: TOGGLE_FOLLOW_IN_PROGRESS,
    userId,
    isFetching,
});

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

export const getUsersThuckCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(fetching());

    usersAPI.requestUsersData(currentPage, pageSize).then((data) => {
        dispatch(endFetching());
        dispatch(
            setUsers(
                data.items.map((user) => {
                    return {
                        id: user.id,
                        fullname: user.name,
                        location: {
                            contry: "Russia",
                            city: "Moscow",
                        },
                        status: user.status,
                        followed: user.followed,
                        avatar: user.photos.small,
                    };
                })
            )
        );
    });
};

export const followThunkCreator = (userId) => (dispatch) => {
    //debugger;
    dispatch(followingInProgress(true, userId));
    usersAPI
        .requestFollow(userId)
        .then((response) => {
            dispatch(follow(userId));
            dispatch(followingInProgress(false, userId));
        })
        .catch((reason) => {
            console.log(reason);
        });
};

export const unfollowThunkCreator = (userId) => (dispatch) => {
    dispatch(followingInProgress(true, userId));
    usersAPI
        .requestUnfollow(userId)
        .then((response) => {
            dispatch(followingInProgress(false, userId));
            dispatch(unfollow(userId));
        })
        .catch((reason) => {
            console.log(reason);
        });
};

export default UsersPageReducer;
