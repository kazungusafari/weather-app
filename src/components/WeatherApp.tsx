import React from "react";

//Components
import {
  HistoricalWeatherInformation,
  WeatherInformation,
  Form,
} from "../components";

export const WeatherApp = () => {
  return (
    <main>
      <div className="form">
        <Form />
      </div>
      <div className="result">
        <WeatherInformation />
        <HistoricalWeatherInformation />
      </div>
    </main>
  );
};
