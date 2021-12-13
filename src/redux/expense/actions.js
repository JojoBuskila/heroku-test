// eslint-disable-next-line import/no-cycle
import {
  EXPENSE_ADD,
  EXPENSE_UPDATE_PROGRESS,
  EXPENSE_ADD_SUCCESS,
  EXPENSE_ADD_ERROR,
  EXPENSE_UPDATE,
  EXPENSE_UPDATE_SUCCESS,
  EXPENSE_UPDATE_ERROR,
  //
  EXPENSE_GET_ITEM,
  EXPENSE_GET_ITEM_SUCCESS,
  EXPENSE_GET_ITEM_ERROR,
  EXPENSE_GET_LIST,
  EXPENSE_GET_LIST_SUCCESS,
  EXPENSE_GET_LIST_ERROR,
  EXPENSE_GET_LIST_WITH_FILTER,
  EXPENSE_GET_LIST_WITH_ORDER,
  EXPENSE_GET_LIST_SEARCH,
  EXPENSE_ADD_ITEM,
  EXPENSE_ADD_ITEM_SUCCESS,
  EXPENSE_ADD_ITEM_ERROR,
  EXPENSE_UPDATE_ITEM,
  EXPENSE_UPDATE_ITEM_SUCCESS,
  EXPENSE_UPDATE_ITEM_ERROR,
  EXPENSE_ADD_NOTE,
  EXPENSE_ADD_NOTE_ERROR,
  EXPENSE_ADD_NOTE_SUCCESS,
} from '../actions';

export const addExpense = (expense) => ({
  type: EXPENSE_ADD,
  payload: expense,
});
export const addExpenseProgress = (progress) => ({
  type: EXPENSE_UPDATE_PROGRESS,
  payload: progress,
});
export const addExpenseSuccess = () => ({
  type: EXPENSE_ADD_SUCCESS,
});
export const addExpenseError = (error) => ({
  type: EXPENSE_ADD_ERROR,
  payload: error,
});

export const updateExpense = (expense) => ({
  type: EXPENSE_UPDATE,
  payload: expense,
});
export const updateExpenseSuccess = (expense) => ({
  type: EXPENSE_UPDATE_SUCCESS,
  payload: expense,
});
export const updateExpenseError = (error) => ({
  type: EXPENSE_UPDATE_ERROR,
  payload: error,
});

/** */

export const getExpenseItem = (id) => ({
  type: EXPENSE_GET_ITEM,
  payload: id,
});

export const getExpenseItemSuccess = (item) => ({
  type: EXPENSE_GET_ITEM_SUCCESS,
  payload: item,
});

export const getExpenseItemError = (error) => ({
  type: EXPENSE_GET_ITEM_ERROR,
  payload: error,
});

export const getExpenseList = () => ({
  type: EXPENSE_GET_LIST,
});

export const getExpenseListSuccess = (items) => ({
  type: EXPENSE_GET_LIST_SUCCESS,
  payload: items,
});

export const getExpenseListError = (error) => ({
  type: EXPENSE_GET_LIST_ERROR,
  payload: error,
});

export const getExpenseListWithFilter = (column, value) => ({
  type: EXPENSE_GET_LIST_WITH_FILTER,
  payload: { column, value },
});

export const getExpenseListWithOrder = (column) => ({
  type: EXPENSE_GET_LIST_WITH_ORDER,
  payload: column,
});

export const getExpenseListSearch = (keyword) => ({
  type: EXPENSE_GET_LIST_SEARCH,
  payload: keyword,
});

export const addExpenseItem = (item) => ({
  type: EXPENSE_ADD_ITEM,
  payload: item,
});

export const addExpenseItemSuccess = (items) => ({
  type: EXPENSE_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addExpenseItemError = (error) => ({
  type: EXPENSE_ADD_ITEM_ERROR,
  payload: error,
});

/** */
export const updateExpenseItem = (item) => ({
  type: EXPENSE_UPDATE_ITEM,
  payload: item,
});

export const updateExpenseItemSuccess = (items) => ({
  type: EXPENSE_UPDATE_ITEM_SUCCESS,
  payload: items,
});

export const updateExpenseItemError = (error) => ({
  type: EXPENSE_UPDATE_ITEM_ERROR,
  payload: error,
});
/** */

/** */
export const addExpenseNote = (note) => ({
  type: EXPENSE_ADD_NOTE,
  payload: note,
});

export const addExpenseNoteSuccess = (notes) => ({
  type: EXPENSE_ADD_NOTE_SUCCESS,
  payload: notes,
});

export const addExpenseNoteError = (error) => ({
  type: EXPENSE_ADD_NOTE_ERROR,
  payload: error,
});
/** */
