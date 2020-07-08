import React from "react";

export default function IndicationsPanel({
  state: { temperature, feelslike, wind_speed, precip, weather_descriptions },
}) {
  return (
    <div className="indications-panel">
      <div className="temp">
        <div class="temp-component">
          <div className="circle">{temperature}C°</div>
          <div>temperature</div>
        </div>
        <div class="temp-component">
          <div className="circle">{feelslike}C°</div>
          <div>temperature felt</div>
        </div>
        <div class="temp-component">
          <div className="circle">{wind_speed}M/s</div>
          <div>wind speed</div>
        </div>
      </div>
      <div className="indicator">{precip} mm rainfall</div>
      <div className="indicator">Sky: {weather_descriptions[0]}</div>
    </div>
  );
}
