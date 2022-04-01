import { PayloadAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import appApi from 'services/appApi';
import { fetchUsers } from './adminSlice';

export function* fetchUser(action: PayloadAction<string>): SagaIterator<void> {
  try {
     const users = yield call(appApi.getAllUsers);
     yield put({type: fetchUsers.type, payload: users});
  } catch (e) {
     console.log(e);
  }
}