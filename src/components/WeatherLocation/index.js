import React from 'react';
import PropTypes from 'prop-types';

//Components
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => {
  return (
    <div>
      <Location city={ 'Ciudad de México' }></Location>
      <WeatherData></WeatherData>
    </div>
  );
}

export default WeatherLocation;