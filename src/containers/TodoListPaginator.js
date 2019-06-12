import React from "react";
import { connect } from "react-redux";

import { getPage, getTodosTotal } from "../selectors";

const TodoListPaginator = ({ page, total, previousPage, nextPage }) => {
  return (
    <div>
      <div>
        <button onClick={previousPage}>Previous Page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>
      <div>Total: {total}</div>
      <div>Page: {page}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  page: getPage(state),
  total: getTodosTotal(state)
});

const mapDispatchToProps = dispatch => ({
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
)(TodoListPaginator);
