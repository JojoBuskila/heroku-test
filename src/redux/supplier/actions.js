// eslint-disable-next-line import/no-cycle
import {
  SUPPLIER_GET_ITEM,
  SUPPLIER_GET_ITEM_SUCCESS,
  SUPPLIER_GET_ITEM_ERROR,
  SUPPLIER_UPDATE_ITEM,
  SUPPLIER_UPDATE_ITEM_SUCCESS,
  SUPPLIER_UPDATE_ITEM_ERROR,
  SUPPLIER_GET_LIST,
  SUPPLIER_GET_LIST_SUCCESS,
  SUPPLIER_GET_LIST_ERROR,
  SUPPLIER_GET_LIST_WITH_FILTER,
  SUPPLIER_GET_LIST_WITH_ORDER,
  SUPPLIER_GET_LIST_SEARCH,
  SUPPLIER_ADD_ITEM,
  SUPPLIER_ADD_ITEM_SUCCESS,
  SUPPLIER_ADD_ITEM_ERROR,
  SUPPLIER_SELECTED_ITEMS_CHANGE,
} from '../actions';

export const getSupplierItem = (id) => ({
  type: SUPPLIER_GET_ITEM,
  payload: id,
});

export const getSupplierItemSuccess = (item) => ({
  type: SUPPLIER_GET_ITEM_SUCCESS,
  payload: item,
});

export const getSupplierItemError = (error) => ({
  type: SUPPLIER_GET_ITEM_ERROR,
  payload: error,
});

export const updateSupplierItem = (item) => ({
  type: SUPPLIER_UPDATE_ITEM,
  payload: item,
});

export const updateSupplierItemSuccess = (items) => ({
  type: SUPPLIER_UPDATE_ITEM_SUCCESS,
  payload: items,
});

export const updateSupplierItemError = (error) => ({
  type: SUPPLIER_UPDATE_ITEM_ERROR,
  payload: error,
});

export const getSupplierList = () => ({
  type: SUPPLIER_GET_LIST,
});

export const getSupplierListSuccess = (items) => ({
  type: SUPPLIER_GET_LIST_SUCCESS,
  payload: items,
});

export const getSupplierListError = (error) => ({
  type: SUPPLIER_GET_LIST_ERROR,
  payload: error,
});

export const getSupplierListWithFilter = (column, value) => ({
  type: SUPPLIER_GET_LIST_WITH_FILTER,
  payload: { column, value },
});

export const getSupplierListWithOrder = (column) => ({
  type: SUPPLIER_GET_LIST_WITH_ORDER,
  payload: column,
});

export const getSupplierListSearch = (keyword) => ({
  type: SUPPLIER_GET_LIST_SEARCH,
  payload: keyword,
});

export const addSupplierItem = (item) => ({
  type: SUPPLIER_ADD_ITEM,
  payload: item,
});

export const addSupplierItemSuccess = (items) => ({
  type: SUPPLIER_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addSupplierItemError = (error) => ({
  type: SUPPLIER_ADD_ITEM_ERROR,
  payload: error,
});

export const selectedSupplierItemsChange = (selectedItems) => ({
  type: SUPPLIER_SELECTED_ITEMS_CHANGE,
  payload: selectedItems,
});
