import {
  defaultDirection,
  defaultLocale,
  defaultColor,
  localeOptions,
  themeColorStorageKey,
  themeRadiusStorageKey,
} from 'constants/defaultValues';

// var options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
// };
export const currencyFormat = (value) => {
  return new Intl.NumberFormat('he', {
    style: 'currency',
    currency: 'ILS',
  }).format(value);
};
export const monthFormat = (date) => {
  return new Intl.DateTimeFormat('he', { month: 'long' }).format(date);
};

export const mapOrder = (array, order, key) => {
  // eslint-disable-next-line func-names
  array.sort(function (a, b) {
    const A = a[key];
    const B = b[key];
    if (order.indexOf(`${A}`) > order.indexOf(`${B}`)) {
      return 1;
    }
    return -1;
  });
  return array;
};

export const getDateISOString = () => {
  const today = new Date();
  return today.toISOString().substr(0, 10);
};

export const convertDateToISOString = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toISOString().substr(0, 10);
};

export const convertDateToLocaleDateString = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('he');
};

export const getImageSrc = (image, size = '') => {
  if (!image) return '';

  if (size === 'small') {
    return `${process.env.REACT_APP_SERVICE_PATH}/${removeExtensionFromFile(
      image
    )}-small.jpeg`;
  }
  return `${process.env.REACT_APP_SERVICE_PATH}/${image}`;
};

export const removeExtensionFromFile = (file) => {
  return file.split('.').slice(0, -1).join('.').toString();
};

export const getCurrentTime = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
};

export const getDirection = () => {
  let direction = defaultDirection;

  try {
    if (localStorage.getItem('direction')) {
      const localValue = localStorage.getItem('direction');
      if (localValue === 'rtl' || localValue === 'ltr') {
        direction = localValue;
      }
    }
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js : getDirection -> error', error);
    direction = defaultDirection;
  }
  return {
    direction,
    isRtl: direction === 'rtl',
  };
};
export const setDirection = (localValue) => {
  let direction = 'ltr';
  if (localValue === 'rtl' || localValue === 'ltr') {
    direction = localValue;
  }
  try {
    localStorage.setItem('direction', direction);
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js : setDirection -> error', error);
  }
};

export const getCurrentColor = () => {
  let currentColor = defaultColor;
  try {
    if (localStorage.getItem(themeColorStorageKey)) {
      currentColor = localStorage.getItem(themeColorStorageKey);
    }
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js : getCurrentColor -> error', error);
    currentColor = defaultColor;
  }
  return currentColor;
};
export const setCurrentColor = (color) => {
  try {
    localStorage.setItem(themeColorStorageKey, color);
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js : setCurrentColor -> error', error);
  }
};

export const getCurrentRadius = () => {
  let currentRadius = 'rounded';
  try {
    if (localStorage.getItem(themeRadiusStorageKey)) {
      currentRadius = localStorage.getItem(themeRadiusStorageKey);
    }
  } catch (error) {
    console.log(
      '>>>>: src/helpers/Utils.js : getCurrentRadius -> error',
      error
    );
    currentRadius = 'rounded';
  }
  return currentRadius;
};
export const setCurrentRadius = (radius) => {
  try {
    localStorage.setItem(themeRadiusStorageKey, radius);
  } catch (error) {
    console.log(
      '>>>>: src/helpers/Utils.js : setCurrentRadius -> error',
      error
    );
  }
};

export const getCurrentCulture = () => {
  let culture = 'en';
  try {
    const currentLanguage = getCurrentLanguage();
    const localeOption = localeOptions.filter((x) => x.id === currentLanguage);
    // console.log(localeOption);
    culture = localeOption[0].culture;
  } catch (error) {
    console.log(
      '>>>>: src/helpers/Utils.js : getCurrentCulture -> error',
      error
    );
  }
  return culture;
};

export const getCurrentLanguage = () => {
  let language = defaultLocale;
  try {
    language =
      localStorage.getItem('currentLanguage') &&
      localeOptions.filter(
        (x) => x.id === localStorage.getItem('currentLanguage')
      ).length > 0
        ? localStorage.getItem('currentLanguage')
        : defaultLocale;
  } catch (error) {
    console.log(
      '>>>>: src/helpers/Utils.js : getCurrentLanguage -> error',
      error
    );
    language = defaultLocale;
  }
  return language;
};
export const setCurrentLanguage = (locale) => {
  try {
    localStorage.setItem('currentLanguage', locale);
  } catch (error) {
    console.log(
      '>>>>: src/helpers/Utils.js : setCurrentLanguage -> error',
      error
    );
  }
};

export const getCurrentUser = () => {
  let user = null;
  try {
    user =
      localStorage.getItem('supakti_current_user') != null
        ? JSON.parse(localStorage.getItem('supakti_current_user'))
        : null;
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js  : getCurrentUser -> error', error);
    user = null;
  }
  return user;
};
export const setCurrentUser = (user) => {
  try {
    if (user) {
      localStorage.setItem('supakti_current_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('supakti_current_user');
    }
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js : setCurrentUser -> error', error);
  }
};
