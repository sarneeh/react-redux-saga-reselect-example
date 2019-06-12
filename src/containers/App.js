import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getPagedTodos } from "../selectors";

const App = ({ loading, todos, fetchTodos, previousPage, nextPage }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div>
        <input placeholder="New task..." />
        <button type="submit">Add Task</button>
        <ul>
          {todos.map(todo => (
            <li>{todo.title}</li>
          ))}
        </ul>
        <button onClick={previousPage}>Previous Page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>
    </main>
  );
};

const mapStateToProps = state => ({
  todos: getPagedTodos(state),
  loading: state.todos.loading
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => {
    dispatch({ type: "TODO_FETCH_REQUESTED" });
  },
  previousPage: () => {
    dispatch({ type: "TODO_PREVIOUS_PAGE" });
  },
  nextPage: () => {
    dispatch({ type: "TODO_NEXT_PAGE" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
