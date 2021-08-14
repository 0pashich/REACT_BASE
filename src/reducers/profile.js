import { TOGGLE_SHOW_NAME, } from '../actions/profile'

import {
    CHANGE_IS_AUTHED,
    CHANGE_IS_ONLINE,
    CHANGE_NAME,
} from '../actions/profile'

const initialState = {
    name: 'John',
    age: 27,
    isOnline: true,
    isAuthed: false,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload.name,
            }
        }
        case TOGGLE_SHOW_NAME: {
            return {
                ...state,
                showName: !state.showName
            }
        }
        case CHANGE_IS_ONLINE: {
            return {
                ...state,
                isOnline: action.payload.isOnline,
            }
        }
        case CHANGE_IS_AUTHED: {
            return {
                ...state,
                isAuthed: action.payload.isAuthed,
            }
        }
        default:
            return state
    }
}