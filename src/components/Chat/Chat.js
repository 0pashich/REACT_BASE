import React from 'react'
import {  useParams } from 'react-router'

const Chat = (props) => {
    const { chatId } = useParams()
 


    return (
        <div>
            <p>Certain chat page, {chatId}</p>
        </div>
    )
}

export default Chat
