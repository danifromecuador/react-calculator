import React from 'react';
import PropTypes from 'prop-types';
import '../style/Button.css';

const Button = ({ buttonName, otherClass }) => (
  <button type="button" className={`button + ${otherClass}`}>
    {buttonName}
  </button>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  otherClass: PropTypes.string,
};

Button.defaultProps = {
  otherClass: '',
};

export default Button;
