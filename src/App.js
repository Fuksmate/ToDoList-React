import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import TOdoList from './components/TOdoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>TODO LIST</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TOdoList todos={todos}  setTodos={setTodos} />
    </div>
  );
}

export default App;
