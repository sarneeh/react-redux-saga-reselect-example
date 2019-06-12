import React, { useEffect } from "react";
import { connect } from "react-redux";

import AddTodo from "./AddTodo";
import PagedTodoList from "./PagedTodoList";
import TodoListPaginator from "./TodoListPaginator";

const App = ({ loading, fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AddTodo />
      <PagedTodoList />
      <TodoListPaginator />
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.loading
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
