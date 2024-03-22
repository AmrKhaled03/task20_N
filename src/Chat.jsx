// Chat.js
import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [nextId, setNextId] = useState(1);

  const sendMessage = (newMessage) => {
    const message = { id: nextId, text: newMessage };
    setMessages([...messages, message]);
    setNextId(nextId + 1);
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Chat Room</h2>
      <div className="card">
        <div className="card-body">
          <MessageList messages={messages} onDeleteMessage={deleteMessage} />
        </div>
        <div className="card-footer">
          <MessageInput sendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
