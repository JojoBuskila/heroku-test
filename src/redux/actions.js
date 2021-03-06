/* eslint-disable import/no-cycle */
/* SETTINGS */
export const CHANGE_LOCALE = 'CHANGE_LOCALE';

/* AUTH */
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

/* MENU */
export const MENU_SET_CLASSNAMES = 'MENU_SET_CLASSNAMES';
export const MENU_CONTAINER_ADD_CLASSNAME = 'MENU_CONTAINER_ADD_CLASSNAME';
export const MENU_CLICK_MOBILE_MENU = 'MENU_CLICK_MOBILE_MENU';
export const MENU_CHANGE_DEFAULT_CLASSES = 'MENU_CHANGE_DEFAULT_CLASSES';
export const MENU_CHANGE_HAS_SUB_ITEM_STATUS =
  'MENU_CHANGE_HAS_SUB_ITEM_STATUS';

/* EXPENSE APP */
export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE_PROGRESS = 'EXPENSE_UPDATE_PROGRESS';
export const EXPENSE_ADD_SUCCESS = 'EXPENSE_ADD_SUCCESS';
export const EXPENSE_ADD_ERROR = 'EXPENSE_ADD_ERROR';

export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_UPDATE_SUCCESS = 'EXPENSE_UPDATE_SUCCESS';
export const EXPENSE_UPDATE_ERROR = 'EXPENSE_UPDATE_ERROR';

export const EXPENSE_GET_ITEM = 'EXPENSE_GET';
export const EXPENSE_GET_ITEM_SUCCESS = 'EXPENSE_GET_SUCCESS';
export const EXPENSE_GET_ITEM_ERROR = 'EXPENSE_GET_ERROR';
export const EXPENSE_GET_LIST = 'EXPENSE_GET_LIST';
export const EXPENSE_GET_LIST_SUCCESS = 'EXPENSE_GET_LIST_SUCCESS';
export const EXPENSE_GET_LIST_ERROR = 'EXPENSE_GET_LIST_ERROR';
export const EXPENSE_GET_LIST_WITH_FILTER = 'EXPENSE_GET_LIST_WITH_FILTER';
export const EXPENSE_GET_LIST_WITH_ORDER = 'EXPENSE_GET_LIST_WITH_ORDER';
export const EXPENSE_GET_LIST_SEARCH = 'EXPENSE_GET_LIST_SEARCH';
export const EXPENSE_ADD_ITEM = 'EXPENSE_ADD_ITEM';
export const EXPENSE_ADD_ITEM_SUCCESS = 'EXPENSE_ADD_ITEM_SUCCESS';
export const EXPENSE_ADD_ITEM_ERROR = 'EXPENSE_ADD_ITEM_ERROR';
export const EXPENSE_UPDATE_ITEM = 'EXPENSE_UPDATE_ITEM';
export const EXPENSE_UPDATE_ITEM_SUCCESS = 'EXPENSE_UPDATE_ITEM_SUCCESS';
export const EXPENSE_UPDATE_ITEM_ERROR = 'EXPENSE_UPDATE_ITEM_ERROR';
export const EXPENSE_ADD_NOTE = 'EXPENSE_ADD_NOTE';
export const EXPENSE_ADD_NOTE_SUCCESS = 'EXPENSE_ADD_NOTE_SUCCESS';
export const EXPENSE_ADD_NOTE_ERROR = 'EXPENSE_ADD_NOTE_ERROR';

/* PAYMENTS APP */
export const PAYMENT_GET_BY_EXPENSE = 'PAYMENT_GET_BY_EXPENSE';
export const PAYMENT_GET_BY_EXPENSE_SUCCESS = 'PAYMENT_GET_BY_EXPENSE_SUCCESS';
export const PAYMENT_GET_BY_EXPENSE_ERROR = 'PAYMENT_GET_BY_EXPENSE_ERROR';
export const PAYMENT_GET_ITEM = 'PAYMENT_GET';
export const PAYMENT_GET_ITEM_SUCCESS = 'PAYMENT_GET_SUCCESS';
export const PAYMENT_GET_ITEM_ERROR = 'PAYMENT_GET_ERROR';
export const PAYMENT_GET_LIST = 'PAYMENT_GET_LIST';
export const PAYMENT_GET_LIST_SUCCESS = 'PAYMENT_GET_LIST_SUCCESS';
export const PAYMENT_GET_LIST_ERROR = 'PAYMENT_GET_LIST_ERROR';
export const PAYMENT_GET_LIST_WITH_FILTER = 'PAYMENT_GET_LIST_WITH_FILTER';
export const PAYMENT_GET_LIST_WITH_ORDER = 'PAYMENT_GET_LIST_WITH_ORDER';
export const PAYMENT_GET_LIST_SEARCH = 'PAYMENT_GET_LIST_SEARCH';
export const PAYMENT_ADD_ITEM = 'PAYMENT_ADD_ITEM';
export const PAYMENT_ADD_ITEM_SUCCESS = 'PAYMENT_ADD_ITEM_SUCCESS';
export const PAYMENT_ADD_ITEM_ERROR = 'PAYMENT_ADD_ITEM_ERROR';

/* SUPPLIERS APP */
export const SUPPLIER_GET_ITEM = 'SUPPLIER_GET_ITEM';
export const SUPPLIER_GET_ITEM_SUCCESS = 'SUPPLIER_GET_ITEM_SUCCESS';
export const SUPPLIER_GET_ITEM_ERROR = 'SUPPLIER_GET_ITEM_ERROR';
export const SUPPLIER_UPDATE_ITEM = 'SUPPLIER_UPDATE_ITEM';
export const SUPPLIER_UPDATE_ITEM_SUCCESS = 'SUPPLIER_UPDATE_ITEM_SUCCESS';
export const SUPPLIER_UPDATE_ITEM_ERROR = 'SUPPLIER_UPDATE_ITEM_ERROR';

export const SUPPLIER_GET_LIST = 'SUPPLIER_GET_LIST';
export const SUPPLIER_GET_LIST_SUCCESS = 'SUPPLIER_GET_LIST_SUCCESS';
export const SUPPLIER_GET_LIST_ERROR = 'SUPPLIER_GET_LIST_ERROR';
export const SUPPLIER_GET_LIST_WITH_FILTER = 'SUPPLIER_GET_LIST_WITH_FILTER';
export const SUPPLIER_GET_LIST_WITH_ORDER = 'SUPPLIER_GET_LIST_WITH_ORDER';
export const SUPPLIER_GET_LIST_SEARCH = 'SUPPLIER_GET_LIST_SEARCH';
export const SUPPLIER_ADD_ITEM = 'SUPPLIER_ADD_ITEM';
export const SUPPLIER_ADD_ITEM_SUCCESS = 'SUPPLIER_ADD_ITEM_SUCCESS';
export const SUPPLIER_ADD_ITEM_ERROR = 'SUPPLIER_ADD_ITEM_ERROR';
export const SUPPLIER_SELECTED_ITEMS_CHANGE = 'TODO_SELECTED_ITEMS_CHANGE';

/* UPLOAD FILES */
export const UPLOAD_FILES = 'UPLOAD_FILES';
export const UPLOAD_FILES_SUCCESS = 'UPLOAD_FILES_SUCCESS';
export const UPLOAD_FILES_ERROR = 'UPLOAD_FILES_ERROR';
export const UPLOAD_FILES_PROGRESS = 'UPLOAD_FILES_PROGRESS';

export * from './menu/actions';
export * from './settings/actions';
export * from './auth/actions';
export * from './expense/actions';
export * from './payment/actions';
export * from './supplier/actions';
export * from './upload/actions';
