export const UserRole = {
  Admin: 'admin',
  Editor: 'editor',
  User: 'user',
};

/*
Menu Types:
"menu-default", "menu-sub-hidden", "menu-hidden"
*/
export const defaultMenuType = 'menu-sub-hidden';

export const subHiddenBreakpoint = 1440;
export const menuHiddenBreakpoint = 768;
export const defaultLocale = 'heltr';
export const localeOptions = [
  { id: 'en', name: 'English - LTR', direction: 'ltr', culture: 'en' },
  { id: 'enrtl', name: 'English - RTL', direction: 'rtl', culture: 'en' },
  { id: 'he', name: 'עברית', direction: 'rtl', culture: 'he' },
  { id: 'heltr', name: 'עברית - LTR', direction: 'ltr', culture: 'he' },
];

export const adminRoot = '/app';
export const searchPath = `${adminRoot}/#`;
// export const servicePath = 'http://localhost:3030';

export const currentUser = {
  companyId: '2aa1c2c35ef7a4e97b5e990a',
  id: '1aa1c2c35ef7a4e97b5e990a',
  title: 'Jojo Buskila',
  img: '/assets/img/profiles/l-5.jpg',
  date: 'Last seen today 15:24',
  role: UserRole.Admin,
};

// (all items must have a translation)
// 'credit_note'  תעודת זיכוי
export const EXPENSE_TYPES = ['delivery', 'invoice', 'order', 'credit_note'];
export const EXPENSE_ORDER_BY_OPTIONS = [
  {
    label: 'expense.date',
    column: 'createdAt',
  },
  {
    label: 'expense.supplier',
    column: 'supplier.name',
  },
  {
    label: 'expense.title',
    column: 'title',
  },
  {
    label: 'expense.expenseType',
    column: 'expenseType',
  },
];
export const PAYMENT_METHODS = [
  {
    method: 'cash',
    isDeferred: false,
  },
  {
    method: 'check',
    isDeferred: true,
  },
  {
    method: 'bank_transfer',
    isDeferred: true,
  },
  {
    method: 'credit_card',
    isDeferred: true,
  },
];
export const PAYMENT_ORDER_BY_OPTIONS = [
  {
    label: 'expense.date',
    column: 'valueDate',
  },
];
/** Note: Api Enum */
export const DELIVERY_STATUS = ['received', 'partly_received', 'not_received'];
/** Note: Api Enum */
export const PAYMENT_STATUS = ['unpaid', 'partly_paid', 'paid'];

export const themeColorStorageKey = '__theme_selected_color';
export const isMultiColorActive = false;
export const defaultColor = 'light.greenlime';
export const isDarkSwitchActive = true;
export const defaultDirection = 'ltr';
export const themeRadiusStorageKey = '__theme_radius';
export const isAuthGuardActive = true;
export const colors = [
  'bluenavy',
  'blueyale',
  'blueolympic',
  'greenmoss',
  'greenlime',
  'purplemonster',
  'orangecarrot',
  'redruby',
  'yellowgranola',
  'greysteel',
];
