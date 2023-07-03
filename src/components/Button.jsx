import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ character }) => (
  <button type="button">{character}</button>
);

Button.propTypes = {
  character: PropTypes.string.isRequired,
};

export default Button;
