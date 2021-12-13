import { all, call, fork, put, take, takeEvery } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import {
  addExpenseItemRequest,
  addPaymentItemRequest,
  getExpenseItemRequest,
  updateExpenseItemRequest,
  uploadFilesRequest,
} from 'helpers/Axios';

import {
  EXPENSE_ADD,
  EXPENSE_UPDATE,
  addExpenseSuccess,
  addExpenseError,
  addExpenseItemSuccess,
  addExpenseProgress,
  getExpenseItemSuccess,
  uploadFilesSuccess,
  uploadFilesProgress,
  updateExpenseSuccess,
  updateExpenseError,
  addPaymentItemSuccess,
  updateExpenseItemSuccess,
} from '../actions';

/** ADD EXPENSE */
function* addExpense({ payload }) {
  const { expense, image, payment } = payload;
  try {
    // add expense
    yield put(addExpenseProgress('adding_expense'));
    let response = yield call(addExpenseItemRequest, expense);
    yield put(addExpenseItemSuccess(response));
    const expenseId = response._id;

    if (expenseId && payment) {
      yield put(addExpenseProgress('adding_payment'));
      payment.expenses.forEach((item) => {
        item.id = expenseId;
      });

      const response = yield call(addPaymentItemRequest, payment);
      yield put(addPaymentItemSuccess(response));
    }

    if (expenseId && image) {
      yield put(addExpenseProgress('adding_image'));
      yield* uploadExpenseImage(expenseId, image);
    }

    response = yield call(getExpenseItemRequest, expenseId);
    yield put(getExpenseItemSuccess(response));

    yield put(addExpenseSuccess());
  } catch (error) {
    yield put(addExpenseError(error));
  }
}

/** UPDATE EXPENSE */
function* updateExpense({ payload }) {
  const { expense, image } = payload;
  try {
    yield put(addExpenseProgress('updating_expense'));
    const response = yield call(updateExpenseItemRequest, expense);
    yield put(updateExpenseItemSuccess(response));

    yield put(addExpenseProgress('updating_image'));
    yield* uploadExpenseImage(expense._id, image);

    yield put(updateExpenseSuccess());
  } catch (error) {
    yield put(updateExpenseError(error));
  }
}

function* uploadExpenseImage(expenseId, image) {
  if (!image) return;
  yield put(addExpenseProgress('uploading_image'));
  const [uploadPromise, chan] = yield call(createUploader, expenseId, image);
  yield fork(watchProgress, chan);
  const res = yield call(() => uploadPromise);

  // update expense image
  yield put(updateExpenseItemSuccess(res));
  yield put(uploadFilesSuccess(res));
}

function createUploader(id, file) {
  let emit;
  const chan = eventChannel((emitter) => {
    emit = emitter;
    return () => {};
  });

  const uploadProgressCb = (data) => {
    const percentage = Math.round((data.loaded * 100) / data.total);
    emit(percentage);
    if (percentage === 100) emit(END);
  };

  const uploadPromise = uploadFilesRequest(id, file, uploadProgressCb);

  return [uploadPromise, chan];
}

function* watchProgress(chan) {
  while (true) {
    // eslint-disable-line no-constant-condition
    const progress = yield take(chan);
    yield put(uploadFilesProgress(progress));
  }
}

export function* watchAddExpense() {
  yield takeEvery(EXPENSE_ADD, addExpense);
}

export function* wathcUpdateExpense() {
  yield takeEvery(EXPENSE_UPDATE, updateExpense);
}

export default function* rootSaga() {
  yield all([fork(watchAddExpense), fork(wathcUpdateExpense)]);
}
