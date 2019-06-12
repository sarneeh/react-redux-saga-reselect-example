import React from "react";

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li>{todo.title}</li>
    ))}
  </ul>
);

export default TodoList;
