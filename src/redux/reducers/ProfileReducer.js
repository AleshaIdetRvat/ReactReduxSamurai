import { profileAPI } from "../../components/api/api"

const ADD_POST = "profile/ADD-POST"
const DELETE_POST = "profile/DELETE-POST"
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_STATUS = "profile/SET_STATUS"
const TOGGLE_SET_FETHING = "profile/TOGGLE_SET_FETHING"
const SET_AVATAR = "profile/SET_AVATAR"

const defaultState = {
    postsData: [
        { id: 1, likes_count: "34", message: "Hello everybody" },
        { id: 2, likes_count: "5", message: "How are they?" },
    ],
    userProfileData: {
        AboutMe: "",
        contacts: null,
        lookingForAJob: false,
        LookingForAJobDescription: "",
        FullName: "",
        photos: {
            small: "",
            large: "",
        },
        isMyProfile: false,
    },
    isFetching: true,
    status: "",
}

export const ProfileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_AVATAR:
            return {
                ...state,
                photos: action.photos,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfileData: {
                    ...state.userProfileData,
                    ...action.userData,
                },
            }
        case TOGGLE_SET_FETHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case ADD_POST:
            if (action.newPost !== "") {
                const post = {
                    likes_count: "0",
                    message: action.newPost,
                    id: state.postsData.length + 1,
                }
                return {
                    ...state,
                    postsData: [...state.postsData, post],
                }
            }
            return state

        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(
                    (post) => post.id !== action.id
                ),
            }

        default:
            return state
    }
}
export const addPostActionCreator = (newPost) => ({
    type: ADD_POST,
    newPost,
})
export const deletePost = (id) => ({
    type: DELETE_POST,
    id,
})

export const setUserProfile = (userData) => ({
    type: SET_USER_PROFILE,
    userData,
})
export const setAvatar = (photos) => ({
    type: SET_AVATAR,
    photos,
})

export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
})

export const toggleSetFetching = (isFetching) => ({
    type: TOGGLE_SET_FETHING,
    isFetching,
})

export const getUserStatus = (userId) => async (dispatch) => {
    // debugger;
    dispatch(toggleSetFetching(true))

    try {
        const getStatus = profileAPI.requestProfileStatus
        const status = await getStatus(userId)
        dispatch(setStatus(status))
        dispatch(toggleSetFetching(false))
    } catch (error) {
        console.log("error", error.message)
    }
}

export const updateAvatarTC = (photo) => async (dispatch) => {
    // debugger;
    dispatch(toggleSetFetching(true))
    try {
        const photos = await profileAPI.uploadAvatar(photo)
        await dispatch(setAvatar(photos))
        dispatch(toggleSetFetching(false))
    } catch (error) {
        console.log("error", error.message)
    } finally {
    }
}

export const updateProfInfo = (profInfo, userId) => async (dispatch) => {
    // debugger;
    dispatch(toggleSetFetching(true))

    try {
        await profileAPI.updateProfInfo({ ...profInfo, userId })
        await dispatch(setUserProfile(profInfo))
    } catch (error) {
        console.log("error: ", error.message)
        throw new Error()
    } finally {
        dispatch(toggleSetFetching(false))
    }
}

export const updateUserStatus = (status) => async (dispatch) => {
    // debugger;
    dispatch(toggleSetFetching(true))
    try {
        await profileAPI.updateProfileStatus(status)
        dispatch(setStatus(status))
        dispatch(toggleSetFetching(false))
    } catch (error) {
        console.log("error", error.message)
    }
}

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
export const getUserPersonDataThunkCreator = (userId) => async (dispatch) => {
    // debugger;
    dispatch(toggleSetFetching(true))

    try {
        const profileData = await profileAPI.requestProfileData(userId)
        dispatch(setUserProfile(profileData))
        dispatch(toggleSetFetching(false))
    } catch (error) {
        console.log("error", error.message)
    }
}

export const initializeProfile = () => async (dispatch) => {
    // const prom = dispatch(getMyDataThunkCreator())
    // await Promise.all([prom])
    // dispatch(initializeSucces())
}

export default ProfileReducer
