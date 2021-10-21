import React from "react";
import { ErrorString, Loading } from "../components";
import { useWeatherData } from "../hooks";
import { WithWeatherDataProps } from "../types";

export function withWeatherData<T>(Component: React.ComponentType<T>) {
  return (props: Omit<T, keyof WithWeatherDataProps>) => {
    const {
      currentWeatherData,
      currentWeatherDataIsLoading,
      currentWeatherDataIsError,
      currentWeatherDataIsSuccess,
    } = useWeatherData();

    if (currentWeatherDataIsLoading) return <Loading />;
    else if (currentWeatherDataIsError)
      return <ErrorString error="Could not fetch weather data" />;
    else if (currentWeatherDataIsSuccess) {
      return (
        <Component {...(props as T)} weatherInformation={currentWeatherData} />
      );
    } else {
      return null;
    }
  };
}
