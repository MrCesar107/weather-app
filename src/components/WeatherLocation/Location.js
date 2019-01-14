import React from 'react';
import PropTypes from 'prop-types';

//Destructurin ES6

const Location = ({ city }) => (
  <div>
    <h1>
      { city }
    </h1>
  </div>
);

Location.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Location;