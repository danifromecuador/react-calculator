import React, { useState } from 'react';
import Display from '../components/Display';
import Button from '../components/Button';
import '../style/Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [obj, setObj] = useState({});
  function handleClick(buttonName) {
    setObj(calculate(obj, buttonName));
  }
  if (!obj.total) obj.total = '';
  if (!obj.operation) obj.operation = '';
  if (!obj.next) obj.next = '';
  return (
    <div className="calculator-main-container">
      <Display value={obj.total + obj.operation + obj.next || '0'} />
      <Button buttonName="AC" handleClick={() => handleClick('AC')} />
      <Button buttonName="+/-" handleClick={() => handleClick('+/-')} />
      <Button buttonName="%" handleClick={() => handleClick('%')} />
      <Button buttonName="÷" otherClass="operator" handleClick={() => handleClick('÷')} />
      <Button buttonName="7" handleClick={() => handleClick('7')} />
      <Button buttonName="8" handleClick={() => handleClick('8')} />
      <Button buttonName="9" handleClick={() => handleClick('9')} />
      <Button buttonName="x" otherClass="operator" handleClick={() => handleClick('x')} />
      <Button buttonName="4" handleClick={() => handleClick('4')} />
      <Button buttonName="5" handleClick={() => handleClick('5')} />
      <Button buttonName="6" handleClick={() => handleClick('6')} />
      <Button buttonName="-" otherClass="operator" handleClick={() => handleClick('-')} />
      <Button buttonName="1" handleClick={() => handleClick('1')} />
      <Button buttonName="2" handleClick={() => handleClick('2')} />
      <Button buttonName="3" handleClick={() => handleClick('3')} />
      <Button buttonName="+" otherClass="operator" handleClick={() => handleClick('+')} />
      <Button buttonName="0" otherClass="zero" handleClick={() => handleClick('0')} />
      <Button buttonName="·" handleClick={() => handleClick('.')} />
      <Button buttonName="=" handleClick={() => handleClick('=')} />
    </div>
  );
}

export default Calculator;
