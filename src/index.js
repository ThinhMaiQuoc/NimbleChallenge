import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import setupAxiosDefaults from './utils/axios';
import './global.scss';

setupAxiosDefaults();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
