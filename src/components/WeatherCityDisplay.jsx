import React from "react";

function WeatherCityDisplay({ data }) {
  // Define a maximum precipitation threshold for the purpose of calculating percentage
  const maxPrecipitation = 10; // Maximum precipitation in mm for 100%

  // Checking for precipitation data in rain or snow object
  const precipitation = data.rain
    ? data.rain["1h"] || data.rain["3h"]
    : data.snow
    ? data.snow["1h"] || data.snow["3h"]
    : 0;

  // Calculate precipitation percentage
  const precipitationPercentage = (precipitation / maxPrecipitation) * 100;

  return (
    <div className="container">
      <div className="top">
        {data.main && (
          <div>
            <h1>{data.main.temp.toFixed()}°F</h1>
            <p>{data.weather ? data.weather[0].main : null}</p>
            <p>
              Precipitation: {Math.min(100, precipitationPercentage.toFixed(2))}
              %
            </p>
            <p>Humidity {data.main.humidity}%</p>
            {data.wind && <p>Wind Speed {data.wind.speed.toFixed()} MPH</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherCityDisplay;