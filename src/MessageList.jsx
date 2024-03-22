// MessageList.js
import React from 'react';

const MessageList = ({ messages, onDeleteMessage }) => {
  const handleDelete = (id) => {
    onDeleteMessage(id);
  };

  return (
    <ul className="list-group">
      {messages.map((message) => (
        <li key={message.id} className="list-group-item">
          <div>{message.text}</div>
          <button
            className="btn btn-danger btn-sm float-right"
            onClick={() => handleDelete(message.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
