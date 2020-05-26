import { Locale } from './types';

export const spacing = {
  page: {
    padding: '40px',
    hPadding: '24px',
  },
  form: {
    vGap: '16px',
  },
};
const colors = {
  white: '#ffffff',
  lightGray: '#f5f5f5',
  borderGray: '#ECECED',
};

export const colorMap = {
  bg: colors.white,
  border: colors.borderGray,
  form: {
    bg: colors.lightGray,
  },
};

export const locales = {
  default: 'en-US',
  supported: [
    {
      id: 'de-DE',
      displayName: 'Deutsch',
    },
    {
      id: 'en-US',
      displayName: 'English',
    },
  ] as Locale[],
};
