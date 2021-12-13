import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import expenseSagas from './expense/saga';
import paymentSagas from './payment/saga';
import supplierSagas from './supplier/saga';
import uploadSagas from './upload/saga';
import sagaExpense from './expense/sagaExpense';

export default function* rootSaga() {
  yield all([
    authSagas(),
    expenseSagas(),
    paymentSagas(),
    supplierSagas(),
    uploadSagas(),
    sagaExpense(),
  ]);
}
