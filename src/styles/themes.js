const main = {
  mobile: '576px'
};


const Themes = {

  light: {
    ...main,
    dark: false,
    // Background
    background: '#EFEBEB',        // Platinum
    backgroundOffset: '#E1DBDB',  // Gainsboro

    // Text
    text: '#3D403B',              // Black Olive
    textOffset: '#1E201D',        // Eerie Black

    // Highlight
    primary: '#F55536',           // Orange Soda
    secondary: '#575F8F',         // Dark Blue Gray
  },

  dark: {
    ...main,
    dark: true,
    // Background
    background: '#161A28',        // Raisin Black
    backgroundOffset: '#141C29',  // Rich Black

    // Text
    text: '#ECE8EE',              // Ghost White
    textOffset: '#CDCBE1',        // Light Periwinkle

    // Highlight
    primary: '#008C8F',           // Dark Cyan
    secondary: '#A0CFAB',         // Turquoise Green
  }
};
export default Themes;
