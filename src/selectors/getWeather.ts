import { RootState } from "../types"

export const getWeather = (state: RootState) => {
    const { data, isError, isLoading } = state.weatherInformation
    return {
        currentWeatherData: data,
        currentWeatherDataIsLoading: isLoading,
        currentWeatherDataIsError: isError
    }
}