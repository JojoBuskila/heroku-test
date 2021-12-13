import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getDateISOString } from 'helpers/Utils';
import {
  getSupplierItemRequest,
  getSupplierListRequest,
  updateSupplierItemRequest,
} from 'helpers/Axios';

// import suppliersData from 'data/suppliers.json';
import {
  SUPPLIER_GET_ITEM,
  SUPPLIER_UPDATE_ITEM,
  SUPPLIER_GET_LIST,
  SUPPLIER_ADD_ITEM,
} from '../actions';

import {
  getSupplierItemSuccess,
  getSupplierItemError,
  updateSupplierItemSuccess,
  updateSupplierItemError,
  getSupplierListSuccess,
  getSupplierListError,
  addSupplierItemSuccess,
  addSupplierItemError,
} from './actions';

function* updateSupplierItem({ payload }) {
  try {
    const response = yield call(updateSupplierItemRequest, payload);
    yield put(updateSupplierItemSuccess(response));
  } catch (error) {
    yield put(updateSupplierItemError(error));
  }
}

function* getSupplierItem({ payload }) {
  try {
    const response = yield call(getSupplierItemRequest, payload);
    yield put(getSupplierItemSuccess(response));
  } catch (error) {
    yield put(getSupplierItemError(error));
  }
}

function* getSupplierListItems() {
  try {
    const response = yield call(getSupplierListRequest);
    yield put(getSupplierListSuccess(response));
  } catch (error) {
    yield put(getSupplierListError(error));
  }
}

const addSupplierItemRequest = async (item) => {
  // const items = suppliersData.data;
  // // eslint-disable-next-line no-param-reassign
  // item.id = items.length + 1;
  // // eslint-disable-next-line no-param-reassign
  // item.createdAt = getDateISOString();
  // items.splice(0, 0, item);
  // // eslint-disable-next-line no-return-await
  // return await new Promise((success) => {
  //   setTimeout(() => {
  //     success(items);
  //   }, 1000);
  // })
  //   .then((response) => response)
  //   .catch((error) => error);
};

function* addSupplierItem({ payload }) {
  try {
    const response = yield call(addSupplierItemRequest, payload);
    yield put(addSupplierItemSuccess(response));
  } catch (error) {
    yield put(addSupplierItemError(error));
  }
}

export function* watchGetItem() {
  yield takeEvery(SUPPLIER_GET_ITEM, getSupplierItem);
}

export function* watchUpdateItem() {
  yield takeEvery(SUPPLIER_UPDATE_ITEM, updateSupplierItem);
}

export function* watchGetList() {
  yield takeEvery(SUPPLIER_GET_LIST, getSupplierListItems);
}

export function* wathcAddItem() {
  yield takeEvery(SUPPLIER_ADD_ITEM, addSupplierItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetItem),
    fork(watchUpdateItem),
    fork(watchGetList),
    fork(wathcAddItem),
  ]);
}
