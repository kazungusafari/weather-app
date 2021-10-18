//Form state management library

import {
  useForm,
  FormField,
  getFieldIfEvent,
} from "@kazungusafari/react-form-field";

//Components

import { HistoricalWeatherInformation } from "./HistoricalWeatherInformation";
import { WeatherInformation } from "./WeatherInformation";

export const WeatherApp = ({
  historicalWeatherData,
  historicalWeatherDataisError,
  historicalWeatherDataisLoading,
  currentWeatherData,
  currentWeatherDataIsLoading,
  currentWeatherDataIsError,
  getWeatherData,
}: {
  historicalWeatherData: any;
  historicalWeatherDataisLoading: boolean;
  getHistoricalWeatherData: any;
  getWeatherData: any;
  historicalWeatherDataisError: boolean;
  currentWeatherDataIsError: boolean;
  currentWeatherData: any;
  currentWeatherDataIsLoading: boolean;
}) => {
  const {
    formData,
    formErrors,
    formHasError,
    onChangeFieldValueHandler,
    setFormError,
  } = useForm({ city: "" });

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (formHasError === false) {
      getWeatherData(formData.city);
    } else {
      console.log(formErrors);
    }
  };

  return (
    <main>
      <div className="form">
        <form onSubmit={handleSearch}>
          <FormField name="city" required onFieldError={setFormError}>
            {({ fieldErrors, isFieldTouched, onChangeFieldErrorHandler }) => {
              return (
                <div>
                  <input
                    id="city"
                    name="city"
                    onChange={(e) => {
                      const field = getFieldIfEvent(e);
                      onChangeFieldValueHandler(field);
                      onChangeFieldErrorHandler(field);
                    }}
                    value={formData.city}
                    placeholder="Enter city"
                  />
                  <button onClick={handleSearch}>Search</button>
                  <div className="input-error">
                    {isFieldTouched && fieldErrors.type === "required" && (
                      <p className="error">City is required</p>
                    )}
                  </div>
                </div>
              );
            }}
          </FormField>
        </form>
      </div>
      <div className="result">
        {currentWeatherData && (
          <WeatherInformation weatherInformation={currentWeatherData} />
        )}
        {currentWeatherDataIsLoading && <p>Loading ......</p>}
        {currentWeatherDataIsError && (
          <p className="error">
            An error occurred while fetching weather data for {formData.city}
            .Please try later
          </p>
        )}
        {historicalWeatherData && (
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
