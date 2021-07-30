import React from 'react'
import Message from '../Message/Message'
import Input from '../Input/Input'
import { AUTHORS } from '../App/constants'


const Chat = (props) => {
    const [messageList, setMessageList] = React.useState([])

    const timer = React.useRef(null)

 

    React.useEffect(() => {

        if (messageList.length > 0 && messageList[messageList.length - 1].author === AUTHORS.ME) {

            timer.current = setTimeout(
                () =>
                    setMessageList((currentMessageList) => [
                        ...currentMessageList,
                        { author: AUTHORS.BOT, text: 'Привет' },
                    ]),
                1500
            )
        }
    }, [messageList])

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current)
        }
    }, [])

    const handleMessageSubmit = (newMessageText) => {
        setMessageList((currentMessageList) => [
            ...currentMessageList,
            { author: AUTHORS.ME, text: newMessageText },
        ])
    }

    return (
        <div className="chat">
            {messageList.length ? (
                <div className="bordered">
                    {messageList.map((message, index) => (
                        <Message
                            key={index}
                            text={message.text}
                            author={message.author}
                            render={({ className }) => (
                                <span className={className}>
                                    {/*{Date.now().toLocaleString()}*/}
                                </span>
                            )}
                        />
                    ))}
                </div>
            ) : null}

            <Input onSubmit={handleMessageSubmit} />
        </div>
    )
}

export default Chat