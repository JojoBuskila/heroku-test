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
import { PAYMENT_ORDER_BY_OPTIONS } from 'constants/defaultValues';
import {
  flattenPayment,
  flattenPayments,
  filterPayments,
  orderArrayByDataColumn,
} from 'helpers/ExpenseUtils';

const INIT_STATE = {
  allPaymentItems: [],
  paymentItems: [],
  expensPayments: [],
  error: '',
  filter: null,
  searchKeyword: '',
  orderColumn: null,
  loading: false,
};

const fn = (state = INIT_STATE, action) => {
  switch (action.type) {
    case PAYMENT_GET_BY_EXPENSE:
      return { ...state, expensPayments: [], loading: true };

    case PAYMENT_GET_BY_EXPENSE_SUCCESS: {
      return {
        ...state,
        loading: false,
        expensPayments: action.payload,
      };
    }

    case PAYMENT_GET_BY_EXPENSE_ERROR:
      return { ...state, loading: false, error: action.payload };

    case PAYMENT_GET_ITEM: {
      // const items = [...state.allPaymentItems];
      // const item = items.find((payment) => payment.id === action.payload);
      // if (item) {
      //   item.isLoadingItem = true;
      // }
      // return { ...state, allPaymentItems: items, paymentItems: items };
      return { ...state };
    }

    case PAYMENT_GET_ITEM_SUCCESS: {
      // const items = [...state.allPaymentItems];
      // const index = items.findIndex(
      //   (payment) => payment._id === action.payload._id
      // );
      // if (index >= 0) {
      //   items[index] = { ...action.payload };
      // } else {
      //   items.push(action.payload);
      // }

      // return {
      //   ...state,
      //   loading: false,
      //   allPaymentItems: items,
      //   paymentItems: items,
      // };
      return { ...state };
    }

    case PAYMENT_GET_ITEM_ERROR:
      return { ...state, error: action.payload };

    case PAYMENT_GET_LIST:
      return { ...state, loading: true };

    case PAYMENT_GET_LIST_SUCCESS: {
      let items = flattenPayments(action.payload);
      items = orderArrayByDataColumn('valueDate', items);
      return {
        ...state,
        loading: false,
        allPaymentItems: items,
        paymentItems: items,
      };
    }

    case PAYMENT_GET_LIST_ERROR:
      return { ...state, loading: false, error: action.payload };

    case PAYMENT_GET_LIST_WITH_FILTER: {
      const column = action.payload.column;
      const value = action.payload.value;
      if (column === '' || value === '') {
        return {
          ...state,
          loading: false,
          paymentItems: state.allPaymentItems,
          filter: null,
        };
      }

      const filteredItems = filterPayments(
        column,
        value,
        state.allPaymentItems
      );

      return {
        ...state,
        loading: false,
        paymentItems: filteredItems,
        filter: {
          column,
          value,
        },
      };
    }

    case PAYMENT_GET_LIST_WITH_ORDER: {
      if (action.payload === '') {
        return {
          ...state,
          loading: false,
          paymentItems: state.paymentItems,
          allPaymentItems: state.allPaymentItems,
          orderColumn: null,
        };
      }

      const sortedItems = state.paymentItems.sort((a, b) => {
        if (a[action.payload] < b[action.payload]) return -1;
        if (a[action.payload] > b[action.payload]) return 1;
        return 0;
      });
      return {
        ...state,
        loading: false,
        paymentItems: sortedItems,
        orderColumn: PAYMENT_ORDER_BY_OPTIONS.find(
          (x) => x.column === action.payload
        ),
      };
      // return { ...state };
    }

    case PAYMENT_GET_LIST_SEARCH: {
      // if (action.payload === '') {
      //   return {
      //     ...state,
      //     loading: false,
      //     paymentItems: state.allPaymentItems,
      //   };
      // }

      // const keyword = action.payload.toLowerCase();
      // const searchItems = state.allPaymentItems.filter(
      //   (item) =>
      //     item.title.toLowerCase().indexOf(keyword) > -1 ||
      //     item.detail.toLowerCase().indexOf(keyword) > -1 ||
      //     item.status.toLowerCase().indexOf(keyword) > -1 ||
      //     item.label.toLowerCase().indexOf(keyword) > -1
      // );
      // return {
      //   ...state,
      //   loading: false,
      //   paymentItems: searchItems,
      //   searchKeyword: action.payload,
      // };
      return { ...state };
    }

    case PAYMENT_ADD_ITEM:
      return { ...state, loading: true };

    case PAYMENT_ADD_ITEM_SUCCESS: {
      const paymentItems = flattenPayment(action.payload);
      const items = [...state.allPaymentItems, ...paymentItems];

      return {
        ...state,
        loading: false,
        allPaymentItems: items,
        paymentItems: items,
      };
    }

    case PAYMENT_ADD_ITEM_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
export default fn;
