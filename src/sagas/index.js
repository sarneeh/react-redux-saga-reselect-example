import { call, put, takeLatest } from "redux-saga/effects";

import api from "../api";

function* fetchTodos(action) {
  const todos = yield call(api.fetchTodos);
  yield put({ type: "TODO_FETCH_SUCCEEDED", todos });
}

function* todoSaga() {
  yield takeLatest("TODO_FETCH_REQUESTED", fetchTodos);
}

export default todoSaga;
