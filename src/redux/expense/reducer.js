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
import {
  filterExpenses,
  orderArrayByDataColumn,
  setExpenseIsLoadingState,
} from 'helpers/ExpenseUtils';

const INIT_STATE = {
  allExpenseItems: null,
  expenseItems: null,
  error: '',
  searchKeyword: '',
  filter: {
    column: 'status',
    value: 'PENDING',
  },
  orderColumn: 'createdAt',
  loading: false,
  loadingNote: false,
  expenseUpdateProgress: '',
};

const fn = (state = INIT_STATE, action) => {
  switch (action.type) {
    case EXPENSE_ADD: {
      return { ...state, expenseUpdateProgress: '' };
    }
    case EXPENSE_ADD_SUCCESS: {
      return { ...state, expenseUpdateProgress: '' };
    }
    case EXPENSE_ADD_ERROR: {
      return { ...state, error: action.payload };
    }

    case EXPENSE_UPDATE_PROGRESS: {
      return { ...state, expenseUpdateProgress: action.payload };
    }

    case EXPENSE_UPDATE: {
      const items = setExpenseIsLoadingState(action.payload.expense._id, [
        ...state.expenseItems,
      ]);
      return { ...state, expenseItems: items, expenseUpdateProgress: '' };
    }
    case EXPENSE_UPDATE_SUCCESS: {
      return { ...state, expenseUpdateProgress: '' };
    }
    case EXPENSE_UPDATE_ERROR: {
      return { ...state, error: action.payload };
    }

    case EXPENSE_GET_ITEM: {
      const items = setExpenseIsLoadingState(action.payload, [
        ...state.expenseItems,
      ]);
      return {
        ...state,
        // allExpenseItems: [...state.allExpenseItems],
        expenseItems: items,
      };
    }

    case EXPENSE_GET_ITEM_SUCCESS: {
      const items = [...state.allExpenseItems];
      const index = items.findIndex((el) => el._id === action.payload._id);
      if (index >= 0) {
        items[index] = action.payload;
      } else {
        items.push(action.payload);
      }

      let filteredItems = items;
      if (state.filter.column !== '' && state.filter.value !== '') {
        filteredItems = filterExpenses(
          state.filter.column,
          state.filter.value,
          items
        );
      }

      return {
        ...state,
        loading: false,
        allExpenseItems: items,
        expenseItems: filteredItems,
      };
    }

    case EXPENSE_GET_ITEM_ERROR: {
      return { ...state, error: action.payload };
    }

    case EXPENSE_GET_LIST: {
      return { ...state, loading: true };
    }

    case EXPENSE_GET_LIST_SUCCESS: {
      const items = action.payload;
      const filteredItems = filterExpenses(
        state.filter.column,
        state.filter.value,
        items
      );

      return {
        ...state,
        loading: false,
        allExpenseItems: items,
        expenseItems: filteredItems,
      };
    }

    case EXPENSE_GET_LIST_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }

    case EXPENSE_GET_LIST_WITH_FILTER: {
      const filteredItems = filterExpenses(
        action.payload.column,
        action.payload.value,
        state.allExpenseItems
      );

      return {
        ...state,
        loading: false,
        expenseItems: filteredItems,
        filter: {
          column: action.payload.column,
          value: action.payload.value,
        },
      };
    }

    case EXPENSE_GET_LIST_WITH_ORDER: {
      const sortedItems = orderArrayByDataColumn(
        action.payload,
        state.expenseItems
      );

      return {
        ...state,
        loading: false,
        expenseItems: sortedItems,
        orderColumn: action.payload,
      };
    }

    case EXPENSE_GET_LIST_SEARCH: {
      if (action.payload === '') {
        return {
          ...state,
          loading: false,
          expenseItems: state.allExpenseItems,
        };
      }
      const keyword = action.payload.toLowerCase();
      const searchItems = state.allExpenseItems.filter(
        (item) =>
          item.title.toLowerCase().indexOf(keyword) > -1 ||
          // item.detail.toLowerCase().indexOf(keyword) > -1 ||
          item.deliveryStatus.toLowerCase().indexOf(keyword) > -1 ||
          item.paymentStatus.toLowerCase().indexOf(keyword) > -1 ||
          item.amount.toLowerCase().indexOf(keyword) > -1 ||
          item.expenseTypeNum.toLowerCase().indexOf(keyword) > -1 ||
          item.supplier.name.toLowerCase().indexOf(keyword) > -1
      );
      return {
        ...state,
        loading: false,
        expenseItems: searchItems,
        searchKeyword: action.payload,
      };
    }

    case EXPENSE_ADD_ITEM: {
      return { ...state, loading: true };
    }

    case EXPENSE_ADD_ITEM_SUCCESS: {
      const items = [...state.allExpenseItems];
      items.splice(0, 0, action.payload);
      const filteredItems = filterExpenses(
        state.filter.column,
        state.filter.value,
        items
      );
      return {
        ...state,
        loading: false,
        allExpenseItems: items,
        expenseItems: filteredItems,
      };
    }

    case EXPENSE_ADD_ITEM_ERROR:
      return { ...state, loading: false, error: action.payload };

    case EXPENSE_UPDATE_ITEM:
      return { ...state };

    case EXPENSE_UPDATE_ITEM_SUCCESS: {
      const items = [...state.allExpenseItems];
      const index = items.findIndex((el) => el._id === action.payload._id);
      items[index] = { ...action.payload };
      const filteredItems = filterExpenses(
        state.filter.column,
        state.filter.value,
        items
      );

      return {
        ...state,
        loading: false,
        allExpenseItems: items,
        expenseItems: filteredItems,
      };
    }

    case EXPENSE_UPDATE_ITEM_ERROR:
      return { ...state, loading: false, error: action.payload };

    case EXPENSE_ADD_NOTE:
      return { ...state, loadingNote: true };

    case EXPENSE_ADD_NOTE_SUCCESS: {
      const items = [...state.allExpenseItems];
      const index = state.allExpenseItems.findIndex(
        (el) => el._id === action.payload.expenseId
      );
      items[index].notes.push(action.payload);

      return {
        ...state,
        loadingNote: false,
        allExpenseItems: items,
        expenseItems: items,
      };
    }

    case EXPENSE_ADD_NOTE_ERROR:
      return { ...state, loadingNote: false, error: action.payload };

    default:
      return { ...state };
  }
};
export default fn;
