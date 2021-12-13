/* Gogo Language Texts

Table of Contents

01.General
02.User Login, Logout, Register
03.Menu
04.Error Page

05.Expense Side Menu

*/

module.exports = {
  'globals.select-dot-dot-dot': 'בחר...',

  /* 01.General */
  'general.copyright': 'Gogo React © 2018 All Rights Reserved.',
  'unauthorized.title': 'Unauthorized Access Attempt',
  'unauthorized.detail':
    'You are not authorized to view the page you are trying to access.',

  /* 02.User Login, Logout, Register */
  'user.login-title': 'התחבר',
  'user.register': 'הצטרף',
  'user.forgot-password': 'שכחת סיסמה',
  'user.email': 'דוא״ל',
  'user.mobile': 'טלפון נייד',
  'user.password': 'סיסמה',
  'user.forgot-password-question': 'שכחת סיסמה?',
  'user.name': 'שם',
  'user.fullname': 'שם מלא',
  'user.login-button': 'התחבר',
  'user.register-button': 'הירשם',
  'user.reset-password-button': 'אפס סיסמה',

  /* Settings */

  /* Expense Types Globals */
  delivery: 'תעודת משלוח',
  invoice: 'חשבונית',
  order: 'הזמנה',
  credit_note: 'זיכוי',
  cash: 'מזומן',
  check: 'המחאה',
  bank_transfer: 'העברה בנקאית',
  credit_card: 'כרטיס אשראי',

  /* Expense Status Globals */
  received: 'התקבל',
  partly_received: 'התקבל חלקית',
  not_received: 'לא התקבל',

  /* Payment Status Globals */
  unpaid: 'לא שולם',
  partly_paid: 'שולם חלקית',
  paid: 'שולם',

  /* 03.Menu */
  'menu.dashboard': 'עמוד הבית',
  'menu.expenses': 'הוצאות',
  'menu.calendar': 'לוח שנה',
  'menu.expenses-old': 'הוצאות ישן',
  'menu.home': 'בית',
  'menu.todo': 'משימות',
  'menu.search': 'חיפוש',
  'menu.docs': 'Docs',
  'menu.charts': 'דוחות',
  'menu.chat': 'מסרים',
  'menu.payments': 'תשלומים',
  'menu.supplier': 'ספק',
  'menu.suppliers': 'ספקים',
  'menu.settings': 'הגדרות',
  'menu.settings-general': 'הגדרות כלליות',
  'menu.settings-my-account': 'החשבון שלי',

  /* 04.Error Page */
  'pages.error-title': 'Ooops... looks like an error occurred!',
  'pages.error-code': 'Error code',
  'pages.go-back-home': 'GO BACK HOME',

  /** Expense Header */
  'expense.orderby': 'סדר לפי:',
  'expense.add-new': 'הוצאה חדשה',
  'expense.display-options': 'אפשרויות תצוגה',
  'expense.total-amount-open': 'סה״כ הוצאות פתוחות:',
  'expense.total-amount-selected': 'סה״כ מסמכים שנבחרו:',
  'expense.actions': 'פעולות',
  'expense.payment': 'תשלום',
  'expense.pay-all': 'שלם הכל',
  'expense.delete': 'מחק',

  /* Expense Side Menu */
  'expense.status': 'סטטוס',
  'expense.all-expenses': 'כל ההוצאות',
  'expense.pending-expenses': 'הוצאות פתוחות',
  'expense.completed-expenses': 'הוצאות סגורות',
  'expense.document-type': 'סוג מסמך',
  'expense.document-type-all': 'כל המסמכים',
  'expense.suppliers': 'ספקים',
  'expense.labels': 'תוויות',

  /** Expense View modal */
  'expense.notes': 'הערות',
  'expense.add-note': 'הוסף הערה',

  /** Expense add new modal */
  'expense.add-new-title': 'הוספת הוצאה חדשה',
  'expense.image': 'צילום מסמך',
  'expense.add-image': 'הוסף צילום מסמך',
  'expense.edit-title': 'עריכת הוצאה',
  'expense.date': 'תאריך',
  'expense.value-date': 'תאריך ערך',
  'expense.supplier': 'ספק',
  'expense.title': 'תאור',
  'expense.detail': 'פרטים',
  'expense.amount': 'סכום',
  'expense.expenseType': 'מסמך קליטה',
  'expense.expenseTypeNum': 'מספר',
  'expense.label': 'תווית',
  'expense.cancel': 'ביטול',
  'expense.submit': 'הוספה',
  'expense.update': 'עידכון',
  'expense.pending': 'פתוח',
  'expense.completed': 'סגור',
  'expense.delivery-status': 'סטטוס משלוח',

  /** Expense Payment Modal */
  'expense.payment-to': 'תשלום ל',
  'expense.open-expenses': 'מסמכים פתוחים',
  'expense.create-payment': 'בצע תשלום',
  'expense.total-for-payment': 'סה״כ לתשלום',
  'expense.total-payment': 'יתרה לתשלום',
  'expense.payment-method': 'אמצעי תשלום',
  'expense.add': 'הוסף',
  'expense.check-number': 'מספר המחאה',

  /** Payments View modal */
  'payment.all-payment-methods': 'כל האפשרויות',

  /** Suppliers */
  'supplier.add-new': 'ספק חדש',
  'supplier.details': 'פרטי ספק',
  'supplier.default-credit': 'אשראי',
  'supplier.default-payment-method': 'העדפת אמצעי תשלום',
  'supplier.is-end-of-month': 'שוטף +',
};
