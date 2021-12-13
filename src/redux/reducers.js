import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';
import expenseApp from './expense/reducer';
import paymentApp from './payment/reducer';
import supplierApp from './supplier/reducer';
import uploadApp from './upload/reducer';

const reducers = combineReducers({
  menu,
  settings,
  authUser,
  expenseApp,
  paymentApp,
  supplierApp,
  uploadApp,
});

export default reducers;
