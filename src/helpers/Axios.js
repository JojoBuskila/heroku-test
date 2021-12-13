import axios from 'axios';
import { getCurrentUser } from './Utils';

/* EXPENSE */
export const addExpenseItemRequest = async (item) => {
  return await axiosInstance
    .post('/expenses', item)
    .then((res) => res.data)
    .catch((error) => error);
};

export const updateExpenseItemRequest = async (item) => {
  return await axiosInstance
    .patch(`/expenses/${item._id}`, item)
    .then((res) => res.data)
    .catch((error) => error);
};

export const getExpenseItemRequest = async (id) => {
  // eslint-disable-next-line no-return-await
  return await axiosInstance
    .get(`/expenses/${id}`)
    .then((res) => res.data)
    .catch((error) => error);
};

export const getExpenseListRequest = async () => {
  // eslint-disable-next-line no-return-await
  return await axiosInstance
    .get('/expenses')
    .then((res) => res.data)
    .catch((error) => error);
};

/** EXPENSE NOTE */
export const addExpenseNoteRequest = async (message) => {
  return await axiosInstance
    .post(`/expenses/${message.expenseId}/notes`, message)
    .then((res) => message)
    .catch((error) => error);
};

/* PAYMENT */
export const getPaymentsByExpenseRequest = async (id) => {
  // eslint-disable-next-line no-return-await
  return await axiosInstance
    .get(`/payments/expense/${id}`)
    .then((res) => res.data)
    .catch((error) => error);
};

export const getPaymentListRequest = async () => {
  // eslint-disable-next-line no-return-await
  return await axiosInstance
    .get('/payments')
    .then((res) => res.data)
    .catch((error) => error);
};

export const addPaymentItemRequest = async (item) => {
  return await axiosInstance
    .post('/payments', item)
    .then((res) => res.data)
    .catch((error) => error);
};

export const getPaymentItemRequest = async (id) => {
  // eslint-disable-next-line no-return-await
  return await axiosInstance
    .get(`/payments/${id}`)
    .then((res) => res.data)
    .catch((error) => error);
};

/* SUPPLIER */
export const getSupplierListRequest = async () => {
  // eslint-disable-next-line no-return-await
  return await axiosInstance
    .get('/suppliers')
    .then((res) => res.data)
    .catch((error) => error);
};

export const getSupplierItemRequest = async (id) => {
  // eslint-disable-next-line no-return-await
  return await axiosInstance
    .get(`/suppliers/${id}`)
    .then((res) => res.data)
    .catch((error) => error);
};

export const updateSupplierItemRequest = async (item) => {
  return await axiosInstance
    .patch(`/suppliers/${item._id}`, item)
    .then((res) => res.data)
    .catch((error) => error);
};

/* UPLOAD */
export const uploadFilesRequest = async (id, file, onUploadProgress) => {
  const formData = new FormData();
  formData.append('image', file);
  return await axiosInstance
    .post(`/expenses/${id}/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
    })
    .then((res) => res.data)
    .catch((error) => error);
};

/* AUTH */
export const loginWithEmailPasswordAsync = async (user) => {
  // eslint-disable-next-line no-return-await
  return await axiosInstance
    .post('/login', user)
    .then((res) => res)
    .catch((error) => error);
};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVICE_PATH,
});

axiosInstance.interceptors.request.use((config) => {
  const user = getCurrentUser();
  config.headers.Authorization = user?.token ? `Bearer ${user.token}` : '';
  return config;
});

export default axiosInstance;
