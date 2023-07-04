import React from 'react';
import Display from './Display';
import Button from './Button';
import '../style/Calculator.css';
// import calculate from '../logic/calculate';

const Calculator = () => {
  const value = 32.2;
  return (
    <div className="calculator-main-container">
      <Display total={value} />
      <Button buttonName="AC" />
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
