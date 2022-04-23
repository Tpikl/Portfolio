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
    secondary: '#60815F',         // Russian Green
  },

  dark: {
    ...main,
    dark: true,
    // Background
    background: '#161A28',        // Raisin Black
    backgroundOffset: '#0e131c',  // Rich Black

    // Text
    text: '#ECE8EE',              // Ghost White
    textOffset: '#CDCBE1',        // Light Periwinkle

    // Highlight
    primary: '#008C8F',           // Dark Cyan
    secondary: '#8AC6D0',         // Middle Blue
  }
};
export default Themes;
