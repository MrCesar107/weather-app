import React from 'react';

//Components
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
  <div>
    <WeatherTemperature />
    <WeatherExtraInfo humidity={80} wind={10} />
  </div>
);

export default WeatherData;