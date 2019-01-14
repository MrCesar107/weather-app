import React from 'react';
import PropTypes from 'prop-types'

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div>
    <span>{ `${humidity}% - ` }</span>
    <span>{ `${wind} m/s` }</span>
  </div>
);

WeatherExtraInfo.prtopTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;
