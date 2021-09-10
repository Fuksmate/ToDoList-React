import React from "react";

const Todo = ({ Text, todos, todo, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const stressHandler = () => {
    document.getElementById(todo.id).style.textDecoration="line-through";
  };
  return (
    <div id={todo.id} className="todo">
      <li className="todo-item">{Text}</li>
      <button onClick={stressHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
