import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ title, className }) {
  return (
    <button type="button" className={className}>
      {title}
    </button>
  );
}

Buttons.propTypes = {
  title: PropTypes.string.isRequired,
  //   onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Buttons.defaultProps = {
  className: '',
};
export default Buttons;
