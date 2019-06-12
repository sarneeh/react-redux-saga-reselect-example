import React from "react";
import { connect } from "react-redux";

import "./App.css";

const App = ({ todos }) => (
  <main>
    <div>
      <input placeholder="New task..." />
      <button type="submit">Add Task</button>
      <ul>
        {todos.map(todo => (
          <li>{todo.title}</li>
        ))}
      </ul>
    </div>
  </main>
);

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);
