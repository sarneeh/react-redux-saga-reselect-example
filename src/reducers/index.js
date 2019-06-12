const defaultState = {
  todos: {
    data: [],
    loading: false,
    page: 0,
    perPage: 5
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "TODO_FETCH_REQUESTED":
      return {
        todos: {
          ...state.todos,
          loading: true
        }
      };
    case "TODO_FETCH_SUCCEEDED":
      return {
        todos: {
          ...state.todos,
          data: action.todos,
          loading: false
        }
      };
    case "TODO_PREVIOUS_PAGE":
      return {
        todos: {
          ...state.todos,
          page: state.todos.page > 0 ? state.todos.page - 1 : state.todos.page
        }
      };
    case "TODO_NEXT_PAGE":
      return {
        todos: {
          ...state.todos,
          page: state.todos.page + 1
        }
      };
    default:
      return state;
  }
};
