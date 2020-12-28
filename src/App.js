import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyles from './global';
import { theme } from './theme';
import { Navbar } from './shared';

import Home from './pages/Home';
import CurriculumVitae from './pages/CurriculumVitae';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />

        <BrowserRouter>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/Cv' component={CurriculumVitae} />
        </BrowserRouter>

    </ThemeProvider>
  );
};
export default App;
