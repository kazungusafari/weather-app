import React from "react";
import { ErrorString, Loading } from "../components";
import { useHistoricalWeatherData } from "../hooks";
import { WithHistoricalWeatherDataProps } from "../types";

export function withHistoricalWeatherData<T>(
  Component: React.ComponentType<T>
) {
  return (props: Omit<T, keyof WithHistoricalWeatherDataProps>) => {
    const {
      historicalWeatherData,
      historicalWeatherDataisError,
      historicalWeatherDataisLoading,
      historicalWeatherDataisSuccess,
    } = useHistoricalWeatherData();

    if (historicalWeatherDataisLoading) {
      return <Loading />;
    } else if (historicalWeatherDataisError) {
      return <ErrorString error="Could not fetch historical weather data" />;
    } else if (historicalWeatherDataisSuccess) {
      return (
        <Component
          {...(props as T)}
          historicalWeatherData={historicalWeatherData}
        />
      );
    } else {
      return null;
    }
  };
}
