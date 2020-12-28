import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyles from './global';
import { lightTheme, darkTheme } from './theme';
import Palette from './shared/Palette/Palette';
import { Navbar } from './shared';

import Home from './pages/Home';
import CurriculumVitae from './pages/CurriculumVitae';

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => setTheme(theme === lightTheme ? darkTheme : lightTheme);

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />

        <BrowserRouter>
          <Palette setTheme={toggleTheme} />
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/Cv' component={CurriculumVitae} />
        </BrowserRouter>

    </ThemeProvider>
  );
};
export default App;
