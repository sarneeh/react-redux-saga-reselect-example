import { createSelector } from "reselect";

export const getPage = state => state.todos.page;
const perPageSelector = state => state.todos.perPage;
const todosSelector = state => state.todos.data;

const pageStartIndexSelector = createSelector(
  getPage,
  perPageSelector,
  (page, perPage) => page * perPage
);

const pageEndIndexSelector = createSelector(
  pageStartIndexSelector,
  perPageSelector,
  (pageStart, perPage) => pageStart + perPage
);

export const getPagedTodos = createSelector(
  pageStartIndexSelector,
  pageEndIndexSelector,
  todosSelector,
  (pageStart, pageEnd, todos) => todos.slice(pageStart, pageEnd)
);

export const getTodosTotal = createSelector(
  todosSelector,
  todos => todos.length
);
