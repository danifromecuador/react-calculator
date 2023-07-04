import React from 'react';
import PropTypes from 'prop-types';
import '../style/Display.css';

const Display = ({ total }) => (
  <div className="display">{total}</div>
);
Display.propTypes = {
  total: PropTypes.string.isRequired,
};
export default Display;
