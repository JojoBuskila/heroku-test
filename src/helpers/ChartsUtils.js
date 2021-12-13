import { orderArrayByDataColumn } from './ExpenseUtils';
import { ThemeColors } from 'helpers/ThemeColors';
import { convertDateToISOString } from './Utils';

const colors = ThemeColors();

export const converPaymentsToChartData = (payments, supplierId = null) => {
  try {
    let labels = [];
    let data = [];

    let filteredPayments = payments;
    if (supplierId) {
      filteredPayments = payments.filter(
        (item) => item.supplier.id === supplierId
      );
    }

    // sort by date
    filteredPayments = orderArrayByDataColumn('valueDate', filteredPayments);

    labels = filteredPayments.map((item) => {
      const date = new Date(item.valueDate);
      return `${date.getDate()}/${date.getMonth() + 1}`;
    });
    data = filteredPayments.map((item) =>
      parseFloat(item.amount.$numberDecimal)
    );

    return { labels, data };
  } catch (error) {
    console.log(
      '>>>>: src/helpers/ChartsUtils.js : converPaymentsToChartData -> error',
      error
    );
    return [];
  }
};

export const groupExpensesByDate = (expenses, supplierId = null) => {
  try {
    // clone
    expenses = [...expenses];

    // sort by date
    expenses = orderArrayByDataColumn('createdAt', expenses);

    // filter by supplierId
    if (supplierId) {
      expenses = expenses.filter((item) => item.supplier.id === supplierId);
    }

    const groups = expenses.reduce((groups, expense) => {
      const date = expense.createdAt.split('T')[0];
      if (!groups[date]) {
        groups[date] = 0;
      }
      groups[date] += parseFloat(expense.amount);
      return groups;
    }, {});

    let data = [];
    const labels = Object.keys(groups).map((date) => {
      data.push(groups[date]);
      const datePart = new Date(date);
      return `${datePart.getDate()}/${datePart.getMonth() + 1}`;
    });

    return { labels, data };
  } catch (error) {
    console.log(
      '>>>>: src/helpers/ChartsUtils.js : groupExpensesByDate -> error',
      error
    );
    return [];
  }
};

export const groupExpensesForMonth = (expenses, supplierId) => {
  try {
    // clone
    expenses = [...expenses];

    // sort by date
    expenses = orderArrayByDataColumn('createdAt', expenses);

    // filter by supplierId
    if (supplierId) {
      expenses = expenses.filter((item) => item.supplier.id === supplierId);
    }

    if (expenses.length < 1) return {};

    let labels = [];
    let datasets = [];

    let startDate = new Date(expenses[0].createdAt);
    let endDate = new Date(expenses[expenses.length - 1].createdAt);
    endDate = endDate.setDate(endDate.getDate() + 1);
    while (startDate < endDate) {
      const currentDate = convertDateToISOString(startDate);
      labels.push(currentDate);
      startDate = new Date(startDate.setDate(startDate.getDate() + 1));
    }

    expenses.forEach((expense) => {
      const date = expense.createdAt.split('T')[0];
      const labelsIndex = labels.findIndex((label) => label === date);

      let data = [];
      labels.forEach((_, index) => {
        if (index === labelsIndex) {
          // const { amountUnpaid } = getExpenseTotals(expense);
          // data.push(amountUnpaid);
          data.push(expense.amount);
        }
        data.push(0);
      });

      // Returns a random integer from 1 to 6
      const colorIndex = Math.floor(Math.random() * 6) + 1;
      datasets.push({
        label: `${expense.expenseType} ${expense.expenseTypeNum}`,
        borderColor: colors[`themeColor${colorIndex}`],
        backgroundColor: colors[`themeColor${colorIndex}_10`],
        data,
        borderWidth: 2,
      });
    });

    labels.forEach((date, index) => {
      const datePart = new Date(date);
      labels[index] = `${datePart.getDate()}.${datePart.getMonth() + 1}`;
    });

    return { labels, datasets };
  } catch (error) {
    console.log(
      '>>>>: src/helpers/ChartsUtils.js : groupExpensesForMonth -> error',
      error
    );
    return [];
  }
};
