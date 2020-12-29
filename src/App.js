import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyles from './global';
import Themes from './themes';
import Navbar from './shared/Navbar/Navbar';

import Home from './pages/Home';

const App = () => {
  const [theme, setTheme] = useState(Themes.dark);
  const toggleTheme = () => setTheme(theme === Themes.light ? Themes.dark : Themes.light);

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />

        <BrowserRouter>
          <Navbar setTheme={toggleTheme} />

          <Route exact path='/' component={Home} />
        </BrowserRouter>

    </ThemeProvider>
  );
};
export default App;
