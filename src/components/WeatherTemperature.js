import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
  sunny: "day-sunny",
  fog: "day-fog"
};
const getWeatherIcon = (weatherState) => {
  const icon = icons[weatherState];
  return icon ? <WeatherIcons name={ icon } size="2x" />
    : <WeatherIcons name={ 'day-sunny' } size="2x" />
}

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div>
    {
      getWeatherIcon(weatherState)
    }
    <span>{ `${temperature}°C` }</span>
  </div>
);

export default WeatherTemperature;