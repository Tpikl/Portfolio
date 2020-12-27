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
    background: ${({theme}) => theme.background};
    background-image: radial-gradient(#466A97 3%, transparent 4%), radial-gradient(#466A97 3%, transparent 4%);
    background-size: 15px 15px;
    color: ${({theme}) => theme.primaryLight};
    font-family: "Nova Mono", monospace;
    text-rendering: optimizeLegibility;
  }
`

export default GlobalStyles;
