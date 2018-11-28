import regeneratorRuntime from 'regenerator-runtime';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  USER_FETCH_REQUESTED,
  userFetchRequested, userFetchSucceeded, userFetchFailed
} from './actions';

function* fetchUser(action) {
  try {
    const repos = yield fetch(`https://api.github.com/users/${action.name}/repos`)
      .then(response => response.json());
    yield put(userFetchSucceeded(action.name, repos));
  } catch (e) {
    yield put(userFetchFailed(e.message));
  }
}

function* rootSaga() {
  yield takeEvery(USER_FETCH_REQUESTED, fetchUser);
}

export default rootSaga;
