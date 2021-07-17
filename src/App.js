import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const user = 'Pavel';


function Message(props) {
  return <h1 className="message">Hello, {props.name}</h1>;
}

function App() {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');

  const handleSendMessage = (event) => {
    event.preventDefault()
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

        <form className="header" onSubmit={handleSendMessage}>
          <input className="input-text" type="text" value={value} onChange={handleChange} placeholder="Введите сообщение" />
          <button className="input-button" >Send</button>
        </form>


      </header>


    </div>
  );
}

export default App;
