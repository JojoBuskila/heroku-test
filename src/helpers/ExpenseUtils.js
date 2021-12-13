import { currencyFormat } from './Utils';

export const getExpenseTotals = (expense) => {
  try {
    let amountPaid = 0;
    if (expense.payments && expense.payments.length) {
      amountPaid = expense.payments.reduce((total, pyment) => {
        const amount = pyment.amount
          ? parseFloat(pyment.amount.$numberDecimal)
          : 0;
        return total + amount;
      }, 0);
    }
    // console.log(expense);
    const amountUnpaid = parseFloat(expense.amount) - parseFloat(amountPaid);

    return { amount: expense.amount, amountPaid, amountUnpaid };
  } catch (error) {
    console.log(
      '>>>>: src/helpers/ExpenseUtils.js : getExpenseTotals -> error',
      error
    );
  }
};

export const flattenPayments = (payments) => {
  try {
    let itemsFlatten = [];
    payments.forEach((payment) => {
      const newItem = flattenPayment(payment);
      itemsFlatten = itemsFlatten.concat(newItem);
    });
    return itemsFlatten;
  } catch (error) {
    console.log(
      '>>>>: src/helpers/ExpenseUtils.js : flattenPayments -> error',
      error
    );
    return [];
  }
};

export const flattenPayment = (payment) => {
  try {
    let itemsFlatten = [];
    const { supplier } = payment;
    payment.items.forEach((item) => {
      const { _id, method, valueDate, checkNumber, amount } = item;
      itemsFlatten.push({
        _id,
        amount: amount,
        checkNumber,
        supplier,
        method,
        valueDate,
      });
    });

    return itemsFlatten;
  } catch (error) {
    console.log(
      '>>>>: src/helpers/ExpenseUtils.js : flattenPayment -> error',
      error
    );
  }
};

export const filterPayments = (column, value, payments) => {
  try {
    let filteredItems = [];
    if (column === 'supplier') {
      filteredItems = payments.filter((item) => item.supplier.id === value);
    } else {
      filteredItems = payments.filter((item) => item[column] === value);
    }

    return filteredItems;
  } catch (error) {
    console.log(
      '>>>>: src/helpers/ExpenseUtils.js : filterPayments -> error',
      error
    );
    return [];
  }
};

export const orderArrayByDataColumn = (column, expenses) => {
  if (!column) {
    return expenses;
  }
  let subColumn = '';
  if (column.indexOf('.', 0) > -1) {
    const columns = column.split('.');
    column = columns[0];
    subColumn = columns[1];
  }

  const sortedItems = expenses.sort((a, b) => {
    if (subColumn === '') {
      if (a[column] < b[column]) return -1;
      if (a[column] > b[column]) return 1;
    } else {
      if (a[column][subColumn] < b[column][subColumn]) return -1;
      if (a[column][subColumn] > b[column][subColumn]) return 1;
    }

    return 0;
  });

  return sortedItems;
};

export const filterExpenses = (column, value, expenses) => {
  if (column === '' || value === '') {
    return expenses;
  }

  let filteredItems = [];
  if (column === 'supplier') {
    filteredItems = expenses.filter((item) => item.supplier.id === value);
  } else if (column === 'status' && value === 'PENDING') {
    filteredItems = expenses.filter(
      (item) =>
        item.deliveryStatus !== 'received' || item.paymentStatus !== 'paid'
    );
  } else if (column === 'status' && value === 'COMPLETED') {
    filteredItems = expenses.filter(
      (item) =>
        item.deliveryStatus === 'received' && item.paymentStatus === 'paid'
    );
  } else {
    filteredItems = expenses.filter((item) => item[column] === value);
  }
  return filteredItems;
};

export const setExpenseIsLoadingState = (id, expenses) => {
  const index = expenses.findIndex((el) => el._id === id);
  if (index >= 0) {
    expenses[index] = { ...expenses[index], isLoadingItem: true };
  }
  return expenses;
};

export const convertExpensesToEvents = (expenses) => {
  const data = expenses.map((expense) => ({
    key: expense._id,
    title: `${expense.supplier.name}: ${currencyFormat(expense.amount)}`,
    start: new Date(expense.createdAt),
    end: new Date(expense.createdAt),
  }));

  return data;
};

// const buildFormData = (formData, data, parentKey) => {
//   if (
//     data &&
//     typeof data === 'object' &&
//     !(data instanceof Date) &&
//     !(data instanceof File)
//   ) {
//     Object.keys(data).forEach((key) => {
//       buildFormData(
//         formData,
//         data[key],
//         parentKey ? `${parentKey}[${key}]` : key
//       );
//     });
//   } else {
//     const value = data == null ? '' : data;

//     formData.append(parentKey, value);
//   }
// };

// export const jsonToFormData = (data) => {
//   try {
//     const formData = new FormData();

//     buildFormData(formData, data);

//     return formData;
//   } catch (error) {
//     console.log(
//       '>>>>: src/helpers/ExpenseUtils.js : filterPayments -> error',
//       error
//     );
//   }
// };
