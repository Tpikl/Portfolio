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
    text: '#333531',              // Black Olive
    textOffset: '#535751',        // Ebony

    // Highlight
    primary: '#F55536',           // Orange Soda
    secondary: '#698F3F',         // Maximum Green
  },

  dark: {
    ...main,
    dark: true,
    // Background
    background: '#161A28',        // Raisin Black
    backgroundOffset: '#141C29',  // Rich Black

    // Text
    text: '#ECE8EE',                 // Ghost White
    textOffset: '#CDCBE1',           // Light Periwinkle

    // Highlight
    primary: '#008C8F',           // Dark Cyan
    secondary: '#626BA7',         // Dark Blue Gray
  }
};
export default Themes;
