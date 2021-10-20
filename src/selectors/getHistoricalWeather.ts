import { RootState } from "../types";

export const getHistoricalWeather = (state: RootState) => {
    const { data, isError, isLoading } = state.historicalWeatherInformation;
    return {
        historicalWeatherData: data,
        historicalWeatherDataisError: isError,
        historicalWeatherDataisLoading: isLoading,
    }
}