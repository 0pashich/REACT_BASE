import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function Message(props) {
  return <h1 className="message">Hello, {props.name}</h1>;
}

function App() {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');
  const user = 'Pavel';

  const handleSendMessage = (event) => {
    setMessageList((arr) => [...arr, { autor: user, text: value }]);
    setValue('');
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  useEffect(() => {
    console.log(messageList);
    if (messageList.length > 0 && messageList[messageList.length - 1].autor === user) {
      setTimeout(() => {
        setMessageList((arr) => [...arr, { autor: 'Robot', text: 'Слава Роботам! Убить всех человеков!' }]);
      }, 1000);
    }
  }, [messageList]);




  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message name={user} />
        </div>


        <div className="messages">
          {messageList.map((message, index) => <div key={index}><span>{message.autor}: </span>{message.text}</div>)}
        </div>
        <div className="header">
          <input className="input-text" type="text" value={value} onChange={handleChange} />
          <button className="input-button" onClick={handleSendMessage}>Send</button>

        </div>

      </header>


    </div>
  );
}

export default App;
