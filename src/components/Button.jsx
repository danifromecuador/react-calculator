import React from 'react';
import PropTypes from 'prop-types';
import '../style/Button.css';

const Button = ({ character, otherClass }) => (
  <button type="button" className={`button + ${otherClass}`}>
    {character}
  </button>
);

Button.propTypes = {
  character: PropTypes.string.isRequired,
  otherClass: PropTypes.string,
};

Button.defaultProps = {
  otherClass: '',
};

export default Button;
