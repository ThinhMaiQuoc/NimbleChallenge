// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import setupAxiosDefaults from './utils/axios';
import './global.scss';

setupAxiosDefaults();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
