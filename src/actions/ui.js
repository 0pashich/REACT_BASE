export const SET_CURENT_CHAT = 'UI::SET_CURENT_CHAT'
export const SET_DRAWER_OPEN = 'UI::SET_DRAWER_OPEN'

export const setCurentChat = (curentChat) => ({
    type: SET_CURENT_CHAT,
    payload: {
        curentChat,
    },
})

export const setDrawerOpen = (drawerOpen) => ({
    type: SET_DRAWER_OPEN,
    payload: {
        drawerOpen,
    },
})


