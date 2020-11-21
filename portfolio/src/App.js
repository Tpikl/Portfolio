import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import { theme } from './theme';
import GlobalStyles from './global';
import Navbar from './shared/Navbar';
import Home from './pages/Home';

import './App.scss';


const App = () => {

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />

        <BrowserRouter>
          <Navbar />
          <Route exact path='/' component={Home} />
        </BrowserRouter>

    </ThemeProvider>
  );
};
export default App;