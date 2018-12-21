import React from 'react';

//Components
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => {
  return (
    <div>
      <Location></Location>
      <WeatherData></WeatherData>
    </div>
  );
}

export default WeatherLocation;