const main = {
  mobile: '576px'
};


export const THEMETYPES = {
  LIGHT: 'light',
  DARK: 'dark'
};

export const lightTheme = {
  ...main,
  type: THEMETYPES.LIGHT,

  primary: '#000000',
  secondary: '#1a2b50',
  tertiary: '#f08203',
  background: '#e5e5e5',
  hover: '#ffffff'
};
export const darkTheme = {
  ...main,
  type: THEMETYPES.DARK,

  primary: '#f2e9e4',
  secondary: '#c9ada7',
  tertiary: '#6a8596',
  background: '#22223b',
  hover: '#9a8c98'
};
