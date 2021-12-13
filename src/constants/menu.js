import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'dashboard',
    icon: 'iconsminds-shop-4',
    label: 'menu.dashboard',
    to: `${adminRoot}/dashboard`,
  },
  {
    id: 'expenses',
    icon: 'iconsminds-shopping-cart',
    label: 'menu.expenses',
    to: `${adminRoot}/expenses`,
  },
  {
    id: 'expenses-calendar',
    icon: 'simple-icon-calendar',
    label: 'menu.calendar',
    to: `${adminRoot}/calendar`,
  },
  {
    id: 'expenses-old',
    icon: 'iconsminds-shopping-cart',
    label: 'menu.expenses-old',
    to: `${adminRoot}/expenses-old`,
  },
  {
    id: 'payments',
    icon: 'iconsminds-money-bag',
    label: 'menu.payments',
    to: `${adminRoot}/payments`,
  },
  {
    id: 'suppliers',
    icon: 'iconsminds-engineering',
    label: 'menu.suppliers',
    to: `${adminRoot}/suppliers`,
  },
  {
    id: 'settings',
    icon: 'simple-icon-settings',
    label: 'menu.settings',
    to: `${adminRoot}/account`,
    subs: [
      {
        icon: 'simple-icon-settings',
        label: 'menu.settings-general',
        to: `${adminRoot}/settings/general/`,
      },
      {
        icon: 'iconsminds-administrator',
        label: 'menu.settings-my-account',
        to: `${adminRoot}/settings/my-account/`,
      },
    ],
  },
  {
    id: 'docs',
    icon: 'iconsminds-library',
    label: 'menu.docs',
    to: 'https://gogo-react-docs.coloredstrategies.com/',
    newWindow: true,
  },
];
export default data;
