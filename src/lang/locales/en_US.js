/* Gogo Language Texts

Table of Contents

01.General
02.User Login, Logout, Register
03.Menu
04.Error Page

05.Expense Side Menu

*/

module.exports = {
  'globals.select-dot-dot-dot': 'Select...',

  /* 01.General */
  'general.copyright': 'Gogo React © 2022 All Rights Reserved.',
  'unauthorized.title': 'Unauthorized Access Attempt',
  'unauthorized.detail':
    'You are not authorized to view the page you are trying to access.',

  /* 02.User Login, Logout, Register */
  'user.login-title': 'Login',
  'user.register': 'Register',
  'user.forgot-password': 'Forgot Password',
  'user.email': 'E-mail',
  'user.mobile': 'Mobile',
  'user.password': 'Password',
  'user.forgot-password-question': 'Forget password?',
  'user.name': 'Name',
  'user.fullname': 'Full Name',
  'user.login-button': 'LOGIN',
  'user.register-button': 'REGISTER',
  'user.reset-password-button': 'RESET',

  /* Settings */

  /* Expense Types Globals */
  delivery: 'Delivery',
  invoice: 'Invoice',
  order: 'Order',
  credit_note: 'Credit Note', // refund
  cash: 'Cash',
  check: 'Check',
  bank_transfer: 'Bank Transfer',
  credit_card: 'Credit Card',

  /* Expense Status Globals */
  received: 'Received',
  partly_received: 'Partly Received',

  /* Payment Status Globals */
  unpaid: 'Unpaid',
  partly_paid: 'Partly Paid',
  paid: 'Paid',
  not_received: 'Not received',

  /* 03.Menu */
  'menu.dashboard': 'Dashboard',
  'menu.expenses': 'Expenses',
  'menu.calendar': 'Calendar',
  'menu.expenses-old': 'Expenses Old',
  'menu.home': 'Home',
  'menu.todo': 'To-do List',
  'menu.search': 'Search',
  'menu.docs': 'Docs',
  'menu.charts': 'Charts',
  'menu.chat': 'Chat',
  'menu.payments': 'Payments',
  'menu.supplier': 'Supplier',
  'menu.suppliers': 'Suppliers',
  'menu.settings': 'Settings',
  'menu.settings-general': 'General Settings',
  'menu.settings-my-account': 'My Account',

  /* 04.Error Page */
  'pages.error-title': 'Ooops... looks like an error occurred!',
  'pages.error-code': 'Error code',
  'pages.go-back-home': 'GO BACK HOME',

  /** Expense Header */
  'expense.orderby': 'Order by:',
  'expense.add-new': 'Add New Expense',
  'expense.display-options': 'Display Options',
  'expense.total-amount-open': 'Total Open:',
  'expense.total-amount-selected': 'Total Selected:',
  'expense.actions': 'Actions',
  'expense.payment': 'Payment',
  'expense.pay-all': 'Pay All',
  'expense.delete': 'Delete',

  /* Expense Side Menu */
  'expense.status': 'Status',
  'expense.all-expenses': 'All Expenses',
  'expense.pending-expenses': 'Pending Expenses',
  'expense.completed-expenses': 'Completed Expenses',
  'expense.document-type': 'Document Type',
  'expense.document-type-all': 'All Types',
  'expense.suppliers': 'Suppliers',
  'expense.labels': 'Labels',

  /** Expense View modal */
  'expense.notes': 'Notes',
  'expense.add-note': 'Add a note',

  /** Expense add new modal */
  'expense.add-new-title': 'Add New Expense',
  'expense.image': 'Expense image',
  'expense.add-image': 'Add an expense image',
  'expense.edit-title': 'Edit Expense',
  'expense.date': 'Date',
  'expense.value-date': 'Value Date',
  'expense.supplier': 'Supplier',
  'expense.title': 'Title',
  'expense.detail': 'Details',
  'expense.amount': 'Amount',
  'expense.expenseType': 'Document Type',
  'expense.expenseTypeNum': 'ID',
  'expense.label': 'Label',
  'expense.cancel': 'Cancel',
  'expense.submit': 'Submit',
  'expense.update': 'Update',
  'expense.pending': 'Pending',
  'expense.completed': 'Completed',
  'expense.delivery-status': 'Delivery Status',

  /** Expense Payment Modal */
  'expense.payment-to': 'Payment to ',
  'expense.open-expenses': 'Open Expenses',
  'expense.create-payment': 'Create Payment',
  'expense.total-for-payment': 'Total for payment:',
  'expense.total-payment': 'Total payment:',
  'expense.payment-method': 'Payment Method',
  'expense.add': 'Add',
  'expense.check-number': 'Check Number',

  /** Payments View modal */
  'payment.all-payment-methods': 'All Payment Methods',

  /** Suppliers */
  'supplier.add-new': 'Add New Supplier',
  'supplier.details': 'Supplier Details',
  'supplier.default-credit': 'Default Credit',
  'supplier.default-payment-method': 'Default Payment Method',
  'supplier.is-end-of-month': 'End of Month +',
};
