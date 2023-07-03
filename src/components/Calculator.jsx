import React from 'react';
import Display from './Display';
import Button from './Button';
import '../style/Calculator.css';

const Calculator = () => (
  <div className="calculator-main-container">
    <Display />
    <Button character="AC" />
    <Button character="+/-" />
    <Button character="%" />
    <Button character="÷" otherClass="operator" />
    <Button character="7" />
    <Button character="8" />
    <Button character="9" />
    <Button character="x" otherClass="operator" />
    <Button character="4" />
    <Button character="5" />
    <Button character="6" />
    <Button character="-" otherClass="operator" />
    <Button character="1" />
    <Button character="2" />
    <Button character="3" />
    <Button character="+" otherClass="operator" />
    <Button character="0" otherClass="zero" />
    <Button character="·" />
    <Button character="=" />
  </div>
);

export default Calculator;
