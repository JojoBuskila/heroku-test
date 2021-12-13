import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  addPaymentItemRequest,
  getPaymentItemRequest,
  getPaymentListRequest,
  getPaymentsByExpenseRequest,
} from 'helpers/Axios';

import {
  PAYMENT_GET_BY_EXPENSE,
  PAYMENT_GET_ITEM,
  PAYMENT_GET_LIST,
  PAYMENT_ADD_ITEM,
} from '../actions';

import {
  getPaymentsByExpenseSuccess,
  getPaymentsByExpenseError,
  getPaymentItemSuccess,
  getPaymentItemError,
  getPaymentListSuccess,
  getPaymentListError,
  addPaymentItemSuccess,
  addPaymentItemError,
} from './actions';

function* getPaymentsByExpense({ payload }) {
  try {
    const response = yield call(getPaymentsByExpenseRequest, payload);
    yield put(getPaymentsByExpenseSuccess(response));
  } catch (error) {
    yield put(getPaymentsByExpenseError(error));
  }
}

function* getPaymentItem({ payload }) {
  try {
    const response = yield call(getPaymentItemRequest, payload);
    yield put(getPaymentItemSuccess(response));
  } catch (error) {
    yield put(getPaymentItemError(error));
  }
}

function* getPaymentListItems() {
  try {
    const response = yield call(getPaymentListRequest);
    yield put(getPaymentListSuccess(response));
  } catch (error) {
    yield put(getPaymentListError(error));
  }
}

function* addPaymentItem({ payload }) {
  try {
    const response = yield call(addPaymentItemRequest, payload);
    yield put(addPaymentItemSuccess(response));
  } catch (error) {
    yield put(addPaymentItemError(error));
  }
}

/** WATCH */
export function* watchGetPaymentsByExpense() {
  yield takeEvery(PAYMENT_GET_BY_EXPENSE, getPaymentsByExpense);
}

export function* watchGetItem() {
  yield takeEvery(PAYMENT_GET_ITEM, getPaymentItem);
}

export function* watchGetList() {
  yield takeEvery(PAYMENT_GET_LIST, getPaymentListItems);
}

export function* wathcAddItem() {
  yield takeEvery(PAYMENT_ADD_ITEM, addPaymentItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(wathcAddItem),
    fork(watchGetPaymentsByExpense),
  ]);
}
