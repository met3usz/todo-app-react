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
import { fetchExampleTasks, selectTasks, setTasks } from './tasksSlice';

function* fetchExampleTasksHandler() {
  try {
    yield delay(100);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, 'Coś poszło nie tak O_o');
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
