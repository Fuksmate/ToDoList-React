import React from "react";

import Todo from "./Todo";

const TOdoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todos={todos}
            todo={todo}
            key={todo.id}
            Text={todo.text}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TOdoList;
