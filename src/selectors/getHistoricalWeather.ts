import { RootState } from "../types";

export const getHistoricalWeather = (state: RootState) => {
    const { data, isError, isLoading, isSuccess } = state.historicalWeatherInformation;
    return {
        historicalWeatherData: data,
        historicalWeatherDataisError: isError,
        historicalWeatherDataisLoading: isLoading,
        historicalWeatherDataisSuccess: isSuccess,
    }
}