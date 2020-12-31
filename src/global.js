import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    // Scrollbar
    -ms-overflow-style: none;  // IE and Edge
    scrollbar-width: none;  // Firefox
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  // Scrollbar
  html::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }

  body {
    text-rendering: optimizeLegibility;
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.primary};

    background-color: ${({theme}) => theme.background};
  }
`
export default GlobalStyles;
