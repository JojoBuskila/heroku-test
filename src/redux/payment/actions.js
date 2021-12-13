// eslint-disable-next-line import/no-cycle
import {
  PAYMENT_GET_BY_EXPENSE,
  PAYMENT_GET_BY_EXPENSE_SUCCESS,
  PAYMENT_GET_BY_EXPENSE_ERROR,
  PAYMENT_GET_ITEM,
  PAYMENT_GET_ITEM_SUCCESS,
  PAYMENT_GET_ITEM_ERROR,
  PAYMENT_GET_LIST,
  PAYMENT_GET_LIST_SUCCESS,
  PAYMENT_GET_LIST_ERROR,
  PAYMENT_GET_LIST_WITH_FILTER,
  PAYMENT_GET_LIST_WITH_ORDER,
  PAYMENT_GET_LIST_SEARCH,
  PAYMENT_ADD_ITEM,
  PAYMENT_ADD_ITEM_SUCCESS,
  PAYMENT_ADD_ITEM_ERROR,
} from '../actions';

export const getPaymentsByExpense = (id) => ({
  type: PAYMENT_GET_BY_EXPENSE,
  payload: id,
});

export const getPaymentsByExpenseSuccess = (items) => ({
  type: PAYMENT_GET_BY_EXPENSE_SUCCESS,
  payload: items,
});

export const getPaymentsByExpenseError = (error) => ({
  type: PAYMENT_GET_BY_EXPENSE_ERROR,
  payload: error,
});

export const getPaymentItem = (id) => ({
  type: PAYMENT_GET_ITEM,
  payload: id,
});

export const getPaymentItemSuccess = (item) => ({
  type: PAYMENT_GET_ITEM_SUCCESS,
  payload: item,
});

export const getPaymentItemError = (error) => ({
  type: PAYMENT_GET_ITEM_ERROR,
  payload: error,
});

export const getPaymentList = () => ({
  type: PAYMENT_GET_LIST,
});

export const getPaymentListSuccess = (items) => ({
  type: PAYMENT_GET_LIST_SUCCESS,
  payload: items,
});

export const getPaymentListError = (error) => ({
  type: PAYMENT_GET_LIST_ERROR,
  payload: error,
});

export const getPaymentListWithFilter = (column, value) => ({
  type: PAYMENT_GET_LIST_WITH_FILTER,
  payload: { column, value },
});

export const getPaymentListWithOrder = (column) => ({
  type: PAYMENT_GET_LIST_WITH_ORDER,
  payload: column,
});

export const getPaymentListSearch = (keyword) => ({
  type: PAYMENT_GET_LIST_SEARCH,
  payload: keyword,
});

export const addPaymentItem = (item) => ({
  type: PAYMENT_ADD_ITEM,
  payload: item,
});

export const addPaymentItemSuccess = (items) => ({
  type: PAYMENT_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addPaymentItemError = (error) => ({
  type: PAYMENT_ADD_ITEM_ERROR,
  payload: error,
});
