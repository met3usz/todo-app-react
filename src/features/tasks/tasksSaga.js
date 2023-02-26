import {
  takeLatest,
  call,
  put,
  delay,
  takeEvery,
  select,
} from 'redux-saga/effects';
import { getExampleTasks } from './getExampleTasks';
import { saveTasksToLocalStorage } from './tasksLocalStorage';
import {
  fetchExampleTasks,
  fetchExampleTasksFail,
  fetchExampleTasksSucces,
  selectTasks,
} from './tasksSlice';

function* fetchExampleTasksHandler() {
  try {
    yield delay(100);
    const exmapleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSucces(exmapleTasks));
  } catch (error) {
    yield put(fetchExampleTasksFail());
    yield call(error, 'Coś poszło nie tak O_o');
  }
}

function* saveTasksToLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksToLocalStorage, tasks);
}

export function* watchFetchExampleTasks() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery('*', saveTasksToLocalStorageHandler);
}
