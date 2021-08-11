import { SET_CURRENT_CHAT, SET_DRAWER_OPEN } from '../actions/ui'


const initialState = {
    drawerOpen: false,
    currentChat: {},
}

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_CHAT: {
            return {
                ...state,
                currentChat: action.payload.currentChat,
            }
        }
        case SET_DRAWER_OPEN: {
            return {

                ...state,
                drawerOpen: action.payload.drawerOpen,
            }
        }
        default:
            return state
    }
}