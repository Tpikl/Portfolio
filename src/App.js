import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyles from './global';
import Themes from './themes';
import Palette from './shared/Palette/Palette';
import { Navbar } from './shared';

import Home from './pages/Home';
import CurriculumVitae from './pages/CurriculumVitae';

const App = () => {
  const [theme, setTheme] = useState(Themes.dark);
  const toggleTheme = () => setTheme(theme === Themes.light ? Themes.dark : Themes.light);

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
