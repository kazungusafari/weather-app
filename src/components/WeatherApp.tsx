import React from "react";

//Components
import {
  HistoricalWeatherInformation,
  WeatherInformation,
  SearchForm,
} from "../components";

export const WeatherApp = () => {
  return (
    <main>
      <div className="form">
        <SearchForm />
      </div>
      <div className="result">
        <WeatherInformation />
        <HistoricalWeatherInformation />
      </div>
    </main>
  );
};
