export const SET_CURRENT_CHAT = 'UI::SET_CURRENT_CHAT'
export const SET_DRAWER_OPEN = 'UI::SET_DRAWER_OPEN'

export const setCurrentChat = (currentChat) => ({
    type: SET_CURRENT_CHAT,
    payload: {
        currentChat,
    },
})

export const setDrawerOpen = (drawerOpen) => ({
    type: SET_DRAWER_OPEN,
    payload: {
        drawerOpen,
    },
})


