import React from "react";

function FiveDayForecast({ forecast }) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="forecast">
      {forecast.map((day, index) => (
        <div key={index} className="forecast-day">
          <div>{daysOfWeek[new Date(day.dt_txt).getDay()]}</div>
          <div>{day.main.temp}°F</div>
        </div>
      ))}
    </div>
  );
}

export default FiveDayForecast;
