import React, { useState } from "react";
import IndicationsPanel from "./indications-panel";
import axios from "axios";
import "./App.css";

const _API_KEY = "ec3ccc6f2d14f374d182e670f02c888d";
const _CURRENT_WEATHER_URL = `http://api.weatherstack.com/current`;

function useWeather(initialState = null) {
  const [weather, setWeather] = useState(initialState);

  const getWeatherByTown = townName => {
    axios
      .get(_CURRENT_WEATHER_URL, {
        params: { access_key: _API_KEY, query: townName }
      })
      .then(response => {
        setWeather(response.data.current);
      });
  };
  return [weather, getWeatherByTown];
}

export default function App() {
  const [weather, getWeatherByTown] = useWeather();
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      getWeatherByTown(event.target.value);
    }
  };

  return (
    <div className="App">
      <input
        className="input-town-name"
        placeholder="название города"
        onKeyPress={handleKeyPress}
      />
      {weather && <IndicationsPanel state={weather} />}
    </div>
  );
}
