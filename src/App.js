// App.js
import React from 'react';
import Chat from './Chat';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header text-center">
        <h1>Chat App</h1>
      </header>
      <Chat />
    </div>
  );
}

export default App;
