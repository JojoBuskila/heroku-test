import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  addExpenseItemRequest,
  addExpenseNoteRequest,
  getExpenseItemRequest,
  getExpenseListRequest,
  updateExpenseItemRequest,
} from 'helpers/Axios';

import {
  EXPENSE_GET_ITEM,
  EXPENSE_GET_LIST,
  EXPENSE_ADD_ITEM,
  EXPENSE_UPDATE_ITEM,
  EXPENSE_ADD_NOTE,
} from '../actions';

import {
  getExpenseItemSuccess,
  getExpenseItemError,
  getExpenseListSuccess,
  getExpenseListError,
  addExpenseItemSuccess,
  addExpenseItemError,
  updateExpenseItemSuccess,
  updateExpenseItemError,
  addExpenseNoteSuccess,
  addExpenseNoteError,
} from './actions';

function* getExpenseItem({ payload }) {
  try {
    const response = yield call(getExpenseItemRequest, payload);
    yield put(getExpenseItemSuccess(response));
  } catch (error) {
    yield put(getExpenseItemError(error));
  }
}

function* getExpenseListItems() {
  try {
    const response = yield call(getExpenseListRequest);
    yield put(getExpenseListSuccess(response));
  } catch (error) {
    yield put(getExpenseListError(error));
  }
}

/** ADD EXPENSE ITEM */
function* addExpenseItem({ payload }) {
  try {
    const response = yield call(addExpenseItemRequest, payload);
    yield put(addExpenseItemSuccess(response));
  } catch (error) {
    yield put(addExpenseItemError(error));
  }
}

/** UPDATE EXPENSE */
function* updateExpenseItem({ payload }) {
  try {
    const response = yield call(updateExpenseItemRequest, payload);
    yield put(updateExpenseItemSuccess(response));
  } catch (error) {
    yield put(updateExpenseItemError(error));
  }
}

/** ADD NOTE */
function* addExpenseNote({ payload }) {
  try {
    const response = yield call(
      // eslint-disable-next-line no-use-before-define
      addExpenseNoteRequest,
      payload
    );
    yield put(addExpenseNoteSuccess(response));
  } catch (error) {
    yield put(addExpenseNoteError(error));
  }
}

/** WATCH */
export function* watchGetItem() {
  yield takeEvery(EXPENSE_GET_ITEM, getExpenseItem);
}

export function* watchGetList() {
  yield takeEvery(EXPENSE_GET_LIST, getExpenseListItems);
}

export function* wathcAddItem() {
  yield takeEvery(EXPENSE_ADD_ITEM, addExpenseItem);
}

export function* wathcUpdateItem() {
  yield takeEvery(EXPENSE_UPDATE_ITEM, updateExpenseItem);
}

export function* wathcAddNote() {
  yield takeEvery(EXPENSE_ADD_NOTE, addExpenseNote);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetItem),
    fork(watchGetList),
    fork(wathcAddItem),
    fork(wathcUpdateItem),
    fork(wathcAddNote),
  ]);
}
