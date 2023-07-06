import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

const App = () => (
  <div className="App">
    <link href="https://fonts.cdnfonts.com/css/seven-segment" rel="stylesheet" />
    <Calculator />
    <Quote />
  </div>
);

export default App;
