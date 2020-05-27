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
  turquoise: '#2FD3C1',
  skyBlue: '#17c0d4',
};

export const colorMap = {
  bg: colors.white,
  border: colors.borderGray,
  form: {
    bg: colors.lightGray,
  },
  accentOne: colors.turquoise,
  accentTwo: colors.skyBlue,
};
export const font = {
  sizes: ['32px', '28px'],
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
