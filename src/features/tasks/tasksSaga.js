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
  fetchExampleTasksSuccess,
  selectTasks,
} from './tasksSlice';

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksFail());
    yield call(alert, 'Coś poszło nie tak O_o');
  }
}

function* saveTasksToLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksToLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery('*', saveTasksToLocalStorageHandler);
}
