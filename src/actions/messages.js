import { AUTHORS } from '../components/App/constants'
import firebase from 'firebase'

export const ADD_MESSAGE = 'MESSAGES:ADD_MESSAGE'
export const CLEAR_MESSAGE = 'MESSAGES:CLEAR_MESSAGE'

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message,
    },
})

export const clearMessage = (chatId) => ({
    type: CLEAR_MESSAGE,
    payload: {
        chatId,
    },
})



export const sendMessageToBot = (chatId, message) => {
    return () => {
        firebase.database().ref('messages').child(chatId).push(message)

        let timer = setTimeout(() => {
            firebase
                .database()
                .ref('messages')
                .child(chatId)
                .push({
                    id: `message${Date.now()}`,
                    author: AUTHORS.BOT,
                    text: 'Привет, я - бот!',
                })

            clearTimeout(timer)
        }, 1500)
    }
}

export const subscribeOnMessagesChangings = (chatId) => {
    return (dispatch, getState) => {
        firebase
            .database()
            .ref('messages')
            .child(chatId)
            .on('child_added', (snapshot) => {
              //  console.log('child_added', snapshot.val())

                dispatch(addMessage(chatId, snapshot.val()))
            })

        firebase
            .database()
            .ref('messages')
            .child(chatId)
            .on('child_changed', (snapshot) => {
              //  console.log('child_changed', snapshot.val())

                dispatch(addMessage(chatId, snapshot.val()))
            })
    }
}
