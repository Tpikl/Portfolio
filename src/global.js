import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle
`
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
    font-family: "Nova Mono", monospace;
    color: ${({theme}) => theme.primaryDark};

    background: ${({theme}) => theme.background};
    background-size: 15px 15px;
    background-image: radial-gradient(#466A97 3%, transparent 4%), radial-gradient(#466A97 3%, transparent 4%);
  }
`

export default GlobalStyles;
