import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <div className="App">
    <link href="https://fonts.cdnfonts.com/css/seven-segment" rel="stylesheet" />
    <App />
  </div>,
);
