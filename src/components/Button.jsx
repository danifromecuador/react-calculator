import React from 'react';
import PropTypes from 'prop-types';
import '../style/Button.css';

const Button = ({ buttonName, otherClass, handleClick }) => (
  <button type="button" name={buttonName} className={`button + ${otherClass}`} onClick={handleClick}>
    {buttonName}
  </button>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  otherClass: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  otherClass: '',
  handleClick: () => null,
};

export default Button;
