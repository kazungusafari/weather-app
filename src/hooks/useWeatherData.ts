import { getWeather } from "../selectors"
import { useAppSelector } from "./reacthooks"

export const useWeatherData = () => {
    const weatherResult = useAppSelector(getWeather);
    return {
        ...weatherResult,
    }
}