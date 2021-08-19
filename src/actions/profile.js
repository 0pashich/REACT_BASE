export const CHANGE_NAME = 'PROFILE::CHANGE_NAME'
export const TOGGLE_SHOW_NAME = 'PROFILE::TOGGLE_SHOW_NAME'
export const CHANGE_IS_AUTHED = 'PROFILE::CHANGE_IS_AUTHED'
export const CHANGE_IS_ONLINE = 'PROFILE::CHANGE_IS_ONLINE'

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: {
        name,
    },
})

export const toggleShowName = {
    type: TOGGLE_SHOW_NAME
}

export const changeIsAuthed = (isAuthed) => ({
    type: CHANGE_IS_AUTHED,
    payload: {
        isAuthed,
    },
})

export const changeNameWithThunk = (name) => {
    return (dispatch, getState) => {
       // console.log(name)
        setTimeout(() => {
            dispatch(changeName(name))
        }, 1000)
    }
}

export const changeIsOnline = (isOnline) => ({
    type: CHANGE_IS_ONLINE,
    payload: {
        isOnline,
    },
})

export const changeIsOnlineWithThunk = (isOnline) => {
    return (dispatch, getState) => {
       // console.log(getState())
        setTimeout(() => {
            dispatch(changeIsOnline(isOnline))
        }, 1000)
    }
}
