import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from 'shared/Navbar';
import Scroller from 'shared/Scroller';
import Home from 'pages/Home';

import GlobalStyles from 'styles/global';
import Themes from 'styles/themes';

const App = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) ?? Themes.light);
  const toggleTheme = () => setTheme(theme === Themes.light ? Themes.dark : Themes.light);
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />

        <BrowserRouter>
          <Navbar setTheme={toggleTheme} />
          <Scroller />

          <Route exact path='/' component={Home} />
        </BrowserRouter>

    </ThemeProvider>
  );
};
export default App;
