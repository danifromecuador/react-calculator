import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import '../style/Calculator.css';
// import '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClickAC = () => {
    console.log('AC button was clicked');
    setObj({ total: '22' });
  };
  return (
    <div className="calculator-main-container">
      <Display value={obj.total} />
      <Button buttonName="AC" handleClick={handleClickAC} />
      <Button buttonName="+/-" />
      <Button buttonName="%" />
      <Button buttonName="÷" otherClass="operator" />
      <Button buttonName="7" />
      <Button buttonName="8" />
      <Button buttonName="9" />
      <Button buttonName="x" otherClass="operator" />
      <Button buttonName="4" />
      <Button buttonName="5" />
      <Button buttonName="6" />
      <Button buttonName="-" otherClass="operator" />
      <Button buttonName="1" />
      <Button buttonName="2" />
      <Button buttonName="3" />
      <Button buttonName="+" otherClass="operator" />
      <Button buttonName="0" otherClass="zero" />
      <Button buttonName="·" />
      <Button buttonName="=" />
    </div>
  );
};

export default Calculator;
