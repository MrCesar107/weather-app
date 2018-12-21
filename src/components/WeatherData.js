import React from 'react';

//Components
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
  <div>
    <WeatherTemperature />
    <WeatherExtraInfo />
  </div>
);

export default WeatherData;