const defaultState = {
  todos: {
    data: [],
    loading: false
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
    default:
      return state;
  }
};
