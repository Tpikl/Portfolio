import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import { theme } from './theme';
import GlobalStyles from './global';
import { Navbar } from './shared';
import Home from './pages/Home';

import './App.scss';
import Resume from './pages/Resume';


const App = () => {

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />

        <BrowserRouter>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/Resume' component={Resume} />
        </BrowserRouter>

    </ThemeProvider>
  );
};
export default App;