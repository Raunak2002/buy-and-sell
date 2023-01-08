import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './dist/css/main.css';
import { HashRouter } from 'react-router-dom';
import { AuthContextProvider } from './Features/AuthContext';

ReactDOM.render(
  <AuthContextProvider>
  <HashRouter>
    <App />
  </HashRouter>
  </AuthContextProvider>,
  document.getElementById('root')
);