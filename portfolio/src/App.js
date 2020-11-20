import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './shared/Navbar';
import Home from './pages/Home';

import './App.scss';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyles from './global';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>

          <Navbar />

          <Route exact path='/' component={Home} />

        </Router>
      </>
    </ThemeProvider>
  );
};
export default App;