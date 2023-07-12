import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<Quote />} />
      </Route>
    </Routes>

  </BrowserRouter>
);

export default App;
