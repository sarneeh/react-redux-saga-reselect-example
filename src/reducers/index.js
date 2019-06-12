const initialState = {
  loading: false,
  todos: {
    data: [],
    page: 0,
    perPage: 5
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "TODO_FETCH_REQUESTED":
      return {
        ...state,
        loading: true
      };
    case "TODO_FETCH_SUCCEEDED":
      return {
        ...state,
        loading: false,
        todos: {
          ...state.todos,
          data: action.todos
        }
      };
    case "TODO_PREVIOUS_PAGE":
      return {
        ...state,
        todos: {
          ...state.todos,
          page: state.todos.page > 0 ? state.todos.page - 1 : state.todos.page
        }
      };
    case "TODO_NEXT_PAGE":
      return {
        ...state,
        todos: {
          ...state.todos,
          /**
           * Yes, I know this should be handled to omit going above `todos.page` index limit
           * but come on! This is just an example project :)
           */
          page: state.todos.page + 1
        }
      };
    default:
      return state;
  }
};
