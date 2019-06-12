import { call, put, takeLatest } from "redux-saga/effects";

function* fetchTodos(action) {
  console.log("fetching todos...");
}

function* todoSaga() {
  yield takeLatest("TODO_FETCH_REQUESTED", fetchTodos);
}

export default todoSaga;
