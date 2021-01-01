import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    // Layout
    --theme-background: ${({theme}) => theme.background};
    --theme-backgroundOffset: ${({theme}) => theme.backgroundOffset};

    // Text
    --theme-text: ${({theme}) => theme.text};
    --theme-textOffset: ${({theme}) => theme.textOffset};

    // Highlight
    --theme-primary: ${({theme}) => theme.primary};
    --theme-secondary: ${({theme}) => theme.secondary};
  }

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
    color: var(--theme-text);

    background-color: var(--theme-background);
  }

  h1 {
    color: var(--theme-primary);
  }

  a { // All links will have deliberate styling.
    text-decoration: none;
    color: var(--theme-text);
  }
  & a:hover {
    color: var(--theme-secondary);
  }
`
export default GlobalStyles;
