const main = {
  mobile: '576px'
};


const Themes = {

  light: {
    ...main,

    primary: '#000000',
    secondary: '#1a2b50',
    tertiary: '#f08203',
    background: '#e5e5e5',
    backgroundOffset: '#d8d8d8',
    hover: '#ffffff'
  },
  dark: {
    ...main,

    primary: '#f2e9e4',
    secondary: '#c9ada7',
    tertiary: '#6a8596',
    background: '#22223b',
    backgroundOffset: '#19192b',
    hover: '#9a8c98'
  }
};
export default Themes;
