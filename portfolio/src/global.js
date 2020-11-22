import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle
`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({theme}) => theme.primaryDark};
    color: ${({theme}) => theme.primaryLight};
    font-family: "Nova Mono", monospace;
    text-rendering: optimizeLegibility;
  }
`

export default GlobalStyles;