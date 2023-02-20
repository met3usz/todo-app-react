import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { getExampleTasks } from './getExampleTasks';
import { fetchExampleTasks, setTasks } from './tasksSlice';

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, 'Coś poszło nie tak O_o');
  }
}

export function* watchFetchExampleTasks() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}
