import React, { useState } from 'react';
import './WeatherData.css'

function WeatherData(props) {
  const { temp, feels_like } = props.weather.main
  const { description, icon } = props.weather.weather[0]
  const [displayDetail, setDisplayDetail] = useState(false)

  return (
    <div className="WeatherData">
      <div className="weatherHighlight">
        <p className='temp'>{temp}</p>
        <img alt="weather icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      </div>

      <div className="weatherSecondary">
        <div>
          <p>Feels like: {feels_like}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherData