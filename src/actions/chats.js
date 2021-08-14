import firebase from 'firebase'
export const ADD_CHAT = 'CHATS::ADD_CHAT'
export const REMOVE_CHAT = 'CHATS::REMOVE_CHAT'

export const addChat = (chatId, name) => ({
    type: ADD_CHAT,
    payload: {
        id: chatId,
        name,
    },
})

export const removeChat = (chatId) => ({
    type: REMOVE_CHAT,
    payload: {
        chatId,
    },
})

export const addChatWithFirebase = (chatId, name) => {
    return () => {
        firebase.database().ref('chats').child(chatId).push({ id: chatId, name: name, })
        console.log('addChatWithFirebase')
    }
}
export const deleteChatWithFirebase = (chatId) => async () => {
    firebase.database().ref("chats").child(chatId).remove();
    console.log('deleteChatWithFirebase')
};

export const subscribeOnChatsChangings = () => {
    return (dispatch, getState) => {
        firebase
            .database()
            .ref('chats')
            .on('child_added', (snapshot) => {
                console.log('child_added', snapshot.val())
                //  snapshot.val()[])
                // dispatch(addChat( snapshot.val()))
            })

        firebase
            .database()
            .ref('messages')
            .on('child_changed', (snapshot) => {
                console.log('child_changed', snapshot.val())

                // dispatch(addChat(chatId, snapshot.val()))
            })
    }
}



// export const sendMessageToBot = (chatId, message) => {
//     return () => {
//         firebase.database().ref('messages').child(chatId).push(message)

//         let timer = setTimeout(() => {
//             firebase
//                 .database()
//                 .ref('messages')
//                 .child(chatId)
//                 .push({
//                     id: `message${Date.now()}`,
//                     author: AUTHORS.BOT,
//                     text: 'Привет, я - бот!',
//                 })

//             clearTimeout(timer)
//         }, 1500)
//     }
// }

// export const subscribeOnChatChangings = (chatId) => {
//     return (dispatch, getState) => {
//         firebase
//             .database()
//             .ref('messages')
//             .child(chatId)
//             .on('child_added', (snapshot) => {
//                 console.log('child_added', snapshot.val())

//                 dispatch(addMessage(chatId, snapshot.val()))
//             })

//         firebase
//             .database()
//             .ref('messages')
//             .child(chatId)
//             .on('child_changed', (snapshot) => {
//                 console.log('child_changed', snapshot.val())

//                 dispatch(addMessage(chatId, snapshot.val()))
//             })
//     }
// }