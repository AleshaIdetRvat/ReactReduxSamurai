const TOGGLE_IS_OPEN = "TOGGLE_IS_OPEN"
const defaultState = {
    isOpen: false,
}

const SidebarReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_IS_OPEN:
            return {
                ...state,
                isOpen: !state.isOpen,
            }
            break

        default:
            break
    }
    return state
}
export const toggleOpenMenu = (isOpen) => ({ type: TOGGLE_IS_OPEN, isOpen })

export default SidebarReducer
