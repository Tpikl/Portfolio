import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }


  body {
    text-rendering: optimizeLegibility;
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.primary};

    background-color: ${({theme}) => theme.background};
  }
`
export default GlobalStyles;
