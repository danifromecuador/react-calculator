import React from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => (
  <div className="calculator-main-container">
    <Display />
    <Button character={22} />
  </div>
);

export default Calculator;
