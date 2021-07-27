import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


const AUTHORS = {
  ME: 'User',
  BOT: 'Bot',
}

function Message(props) {
  return (
    <p className="message" >
      <span>{props.author}: </span>{props.text}
    </p>
  )
}

function ChatItem(props) {
  return (
    <ListItem button>
      <ListItemText primary={props.name} />
    </ListItem>
  )
}



function App() {
  const [chatList, setChatList] = useState([{ name: 'Bender', id: 'qwer' }, { name: 'Leela', id: 'asdf' }, { name: 'Fry', id: 'zxcv' }, { name: 'Zoidberg', id: 'bnmv' }])
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');
  const timer = React.useRef(null)
  const classes = useStyles();

  const handleSendMessage = (event) => {
    event.preventDefault()
    setMessageList((arr) => [...arr, { author: AUTHORS.ME, text: value }]);
    setValue('');
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  React.useEffect(() => {
    //console.log(messageList);
    if (messageList.length > 0 && messageList[messageList.length - 1].author === AUTHORS.ME) {
      timer.current = setTimeout(() => {
        setMessageList((arr) => [...arr, { author: AUTHORS.BOT, text: 'Слава Роботам! Убить всех человеков!' }]);
      }, 1000);
    }
  }, [messageList]);

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current)
    }
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <List component="nav" className={classes.root} aria-label="chats">
            {chatList.map((chat, index) => (
              <ChatItem key={chat.id} name={chat.name} />
            ))}
          </List>
        </div>
        <div>
          <div className="header bordered">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello, {AUTHORS.ME}!</p>
          </div>



          <div className="messages bordered">
            {messageList.map((message, index) => (
              <Message
                key={index}
                text={message.text}
                author={message.author}
              />
            ))}
          </div>



          <form className="header bordered" onSubmit={handleSendMessage}>
            {/* <input className="input-text" type="text" value={value} onChange={handleChange} placeholder="Введите сообщение" /> */}
            <TextField
              fullWidth
              autoFocus
              required

              className="header bordered"
              id="outlined-textarea"
              label="Введите сообщение"
              placeholder=""
              variant="outlined"
              value={value}
              onChange={handleChange}
            />

            <button className="input-button" >Send</button>
          </form>

        </div>
      </header>


    </div>
  );
}

export default App;
