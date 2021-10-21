//Form state management library

import { useForm, FormField } from "@kazungusafari/react-form-field";
import React from "react";
import { compose } from "redux";

//Components

import {
  HistoricalWeatherInformation,
  WeatherInformation,
  SearchInput,
} from "../components";
import { useWeather } from "../hooks/useWeather";

export const WeatherApp = () => {
  const {
    getWeatherInfoByCityAsyncThunk,
    historicalWeatherData,
    historicalWeatherDataisError,
    historicalWeatherDataisLoading,
    historicalWeatherDataisSuccess,
    currentWeatherData,
    currentWeatherDataIsLoading,
    currentWeatherDataIsError,
    currentWeatherDataIsSuccess,
  } = useWeather();

  const {
    formData,
    formErrors,
    formHasError,
    onChangeFieldValueHandler,
    setFormError,
  } = useForm({ city: "" });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formHasError === false) {
      getWeatherInfoByCityAsyncThunk(formData.city);
    } else {
      console.log(formErrors);
    }
  };

  return (
    <main>
      <div className="form">
        <form onSubmit={handleSearch}>
          <FormField
            name="city"
            required
            onFieldError={setFormError}
            type="alpha"
          >
            {({ fieldErrors, isFieldTouched, onChangeFieldErrorHandler }) => (
              <SearchInput
                onChangeFieldErrorHandler={onChangeFieldErrorHandler}
                onChangeFieldValueHandler={onChangeFieldValueHandler}
                isFieldTouched={isFieldTouched}
                fieldErrors={fieldErrors}
                value={formData.city}
              />
            )}
          </FormField>
        </form>
      </div>
      <div className="result">
        {currentWeatherDataIsSuccess && (
          <WeatherInformation weatherInformation={currentWeatherData} />
        )}
        {currentWeatherDataIsLoading && <p>Loading ......</p>}
        {currentWeatherDataIsError && (
          <p className="error">
            An error occurred while fetching weather data for {formData.city}
            .Please try later
          </p>
        )}
        {historicalWeatherDataisSuccess && (
          <HistoricalWeatherInformation
            name={currentWeatherData.name}
            historicalWeatherData={historicalWeatherData}
          />
        )}
        {historicalWeatherDataisLoading && <p>Loading ....</p>}
        {historicalWeatherDataisError && (
          <p className="error">
            Error occured while fetching historical Weather Data
          </p>
        )}
      </div>
    </main>
  );
};
