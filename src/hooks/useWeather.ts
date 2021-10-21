
import { bindActionCreators } from "@reduxjs/toolkit";
import { getWeatherInfoByCityAsyncThunk } from "../features";
import { getWeather, getHistoricalWeather } from "../selectors"
import { useAppDispatch, useAppSelector } from "./reacthooks"

export const useWeather = () => {
    const dispatch = useAppDispatch()
    const weatherResult = useAppSelector(getWeather);
    const historicalWeatherResult = useAppSelector(getHistoricalWeather);
    const asynchThunk = bindActionCreators({ getWeatherInfoByCityAsyncThunk }, dispatch)
    return {
        ...weatherResult,
        ...historicalWeatherResult,
        ...asynchThunk,
    }
}