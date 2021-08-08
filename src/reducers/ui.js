import { SET_CURENT_CHAT, SET_DRAWER_OPEN } from '../actions/ui'


const initialState = {
    drawerOpen: false,
    curentChat: {},
}

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURENT_CHAT: {
            return {
                ...state,
                curentChat: action.payload.curentChat,
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