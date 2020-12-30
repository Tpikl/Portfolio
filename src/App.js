import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './shared/Navbar/Navbar';
import Network from './shared/Network/Network';
import Home from './pages/Home';

import GlobalStyles from './global';
import Themes from './themes';

const App = () => {
  const [theme, setTheme] = useState(Themes.dark);
  const toggleTheme = () => setTheme(theme === Themes.light ? Themes.dark : Themes.light);

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />

        <BrowserRouter>
          <Navbar setTheme={toggleTheme} />
          <Network />

          <Route exact path='/' component={Home} />
        </BrowserRouter>

    </ThemeProvider>
  );
};
export default App;
