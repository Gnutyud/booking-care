import { takeEvery } from 'redux-saga/effects';
import { sagaActions } from './sagaActions';
import { fetchUser } from 'features/admin/adminSaga';

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_USERS, fetchUser);
}