import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./App.css";

const App = ({ todos, fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  if (todos.loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div>
        <input placeholder="New task..." />
        <button type="submit">Add Task</button>
        <ul>
          {todos.data.map(todo => (
            <li>{todo.title}</li>
          ))}
        </ul>
      </div>
    </main>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => {
    dispatch({ type: "TODO_FETCH_REQUESTED" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
