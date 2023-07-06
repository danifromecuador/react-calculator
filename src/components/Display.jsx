import React from 'react';
import PropTypes from 'prop-types';
import '../style/Display.css';

const Display = ({ value }) => (
  <div className="display">{value}</div>
);

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: undefined,
};

export default Display;
