import { getHistoricalWeather } from "../selectors"
import { useAppSelector } from "./reacthooks"

export const useHistoricalWeatherData = () => {
    const historicalWeatherResult = useAppSelector(getHistoricalWeather);
    return {
        ...historicalWeatherResult,
    }
}