import { AUTHORS } from '../components/App/constants'
export const ADD_MESSAGE = 'MESSAGES:ADD_MESSAGE'


export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message,
    },
})

export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));
    if (message.author !== AUTHORS.BOT) {
        const botMessage = { id: `botmessage${Date.now()}`, text: 'Привет!', author: AUTHORS.BOT };
        setTimeout(() => dispatch(addMessage(chatId, botMessage)), 2000);
    }
}
