import { connect } from "react-redux";

import { getPagedTodos } from "../selectors";
import TodoList from "../components/TodoList";

const mapStateToProps = state => ({
  todos: getPagedTodos(state)
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
)(TodoList);
