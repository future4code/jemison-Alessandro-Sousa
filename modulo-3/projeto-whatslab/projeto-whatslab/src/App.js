import React from 'react'
import { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  function handleCreateNewMessage(event) {
    event.preventDefault();

    const newMessage = {
      author: event.target.author.value,
      message: event.target.message.value
    }

    setMessages([...messages, newMessage]);

    event.target.message.value = '';
  }

  return (
    <div className='chat'>
      <div className='messages' id='scroll'>
        {messages.map(message => (
          <div key={message.message} className="message">
            <strong>{message.author}</strong>
            <p>{message.message}</p>
          </div>
        ))}
      </div>

      <form className='messageForm' onSubmit={handleCreateNewMessage}>
        <input type="text" placeholder='Nome' name='author' required />
        <textarea placeholder='Mensagem' name='message' required />
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default App
