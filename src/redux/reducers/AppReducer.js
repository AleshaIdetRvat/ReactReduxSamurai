import { getMyDataThunkCreator } from "./AuthReducer";

const INITIALIZE_SUCCES = "INITIALIZE_SUCCES";

const defaultState = {
    initialize: false,
};

const AppReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCES:
            return { ...state, initialize: true };

        default:
            return state;
    }
};

export const initializeSucces = () => ({
    type: INITIALIZE_SUCCES,
});

export const initializeApp = () => (dispatch) => {
    // await dispatch(getMyDataThunkCreator());
    // dispatch(initializeSucces());
    const proms = dispatch(getMyDataThunkCreator());
    Promise.all([proms]).then(() => dispatch(initializeSucces()));
};

export default AppReducer;
