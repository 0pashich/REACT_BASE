import { TOGGLE_SHOW_NAME, CHANGE_NAME } from '../actions/profile'

const initialState = {
    name: 'Anonimus',
    age: 27,
    showName: false,
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
        default:
            return state
    }
}