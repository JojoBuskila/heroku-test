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

const INIT_STATE = {
  allSuppliersItems: null,
  supplierItems: null,
  error: '',
  filter: null,
  searchKeyword: '',
  orderColumn: null,
  loading: false,
  labels: [
    { label: 'EDUCATION', color: 'secondary' },
    { label: 'NEW FRAMEWORK', color: 'primary' },
    { label: 'PERSONAL', color: 'info' },
  ],
  orderColumns: [
    { column: 'title', label: 'Title' },
    { column: 'category', label: 'Category' },
    { column: 'status', label: 'Status' },
    { column: 'label', label: 'Label' },
  ],
  categories: ['Flexbox', 'Sass', 'React'],
  selectedItems: [],
};

const fn = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SUPPLIER_GET_ITEM: {
      return { ...state, loading: true };
    }

    case SUPPLIER_GET_ITEM_SUCCESS: {
      const items = [...state.allSuppliersItems];
      const index = items?.findIndex((el) => el._id === action.payload._id);

      if (index >= 0) {
        items[index] = action.payload;
      } else {
        items.push(action.payload);
      }

      return {
        ...state,
        loading: false,
        allSuppliersItems: items,
        supplierItems: items,
      };
    }

    case SUPPLIER_GET_ITEM_ERROR: {
      return { ...state, loading: true, error: action.payload };
    }

    case SUPPLIER_UPDATE_ITEM: {
      return { ...state, loading: true };
    }

    case SUPPLIER_UPDATE_ITEM_SUCCESS: {
      const items = [...state.allSuppliersItems];
      const index = items.findIndex((el) => el._id === action.payload._id);
      items[index] = { ...action.payload };
      return {
        ...state,
        loading: false,
        allSuppliersItems: items,
        supplierItems: items,
      };
    }

    case SUPPLIER_UPDATE_ITEM_ERROR:
      return { ...state, loading: false, error: action.payload };

    case SUPPLIER_GET_LIST:
      return { ...state, loading: true };

    case SUPPLIER_GET_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        allSuppliersItems: action.payload,
        supplierItems: action.payload,
      };

    case SUPPLIER_GET_LIST_ERROR:
      return { ...state, loading: true, error: action.payload };

    case SUPPLIER_GET_LIST_WITH_FILTER:
      if (action.payload.column === '' || action.payload.value === '') {
        return {
          ...state,
          loading: true,
          supplierItems: state.allSuppliersItems,
          filter: null,
        };
      }
      // eslint-disable-next-line no-case-declarations
      const filteredItems = state.allSuppliersItems.filter(
        (item) => item[action.payload.column] === action.payload.value
      );
      return {
        ...state,
        loading: true,
        supplierItems: filteredItems,
        filter: {
          column: action.payload.column,
          value: action.payload.value,
        },
      };

    case SUPPLIER_GET_LIST_WITH_ORDER:
      if (action.payload === '') {
        return {
          ...state,
          loading: true,
          supplierItems: state.supplierItems,
          orderColumn: null,
        };
      }
      // eslint-disable-next-line no-case-declarations
      const sortedItems = state.supplierItems.sort((a, b) => {
        if (a[action.payload] < b[action.payload]) return -1;
        if (a[action.payload] > b[action.payload]) return 1;
        return 0;
      });
      return {
        ...state,
        loading: true,
        supplierItems: sortedItems,
        orderColumn: state.orderColumns.find(
          (x) => x.column === action.payload
        ),
      };

    case SUPPLIER_GET_LIST_SEARCH:
      if (action.payload === '') {
        return { ...state, supplierItems: state.allSuppliersItems };
      }
      // eslint-disable-next-line no-case-declarations
      const keyword = action.payload.toLowerCase();
      // eslint-disable-next-line no-case-declarations
      const searchItems = state.allSuppliersItems.filter(
        (item) =>
          item.title.toLowerCase().indexOf(keyword) > -1 ||
          item.detail.toLowerCase().indexOf(keyword) > -1 ||
          item.status.toLowerCase().indexOf(keyword) > -1 ||
          item.category.toLowerCase().indexOf(keyword) > -1 ||
          item.label.toLowerCase().indexOf(keyword) > -1
      );
      return {
        ...state,
        loading: true,
        supplierItems: searchItems,
        searchKeyword: action.payload,
      };

    case SUPPLIER_ADD_ITEM:
      return { ...state, loading: true };

    case SUPPLIER_ADD_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        allSuppliersItems: action.payload,
        supplierItems: action.payload,
      };

    case SUPPLIER_ADD_ITEM_ERROR:
      return { ...state, loading: true, error: action.payload };

    case SUPPLIER_SELECTED_ITEMS_CHANGE:
      return { ...state, loading: true, selectedItems: action.payload };
    default:
      return { ...state };
  }
};
export default fn;
