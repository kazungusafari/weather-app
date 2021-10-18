import { connect } from "react-redux"
import { WeatherApp } from "../components"
import { getWeatherInfoByCityAsyncThunk, getHistoricalWeatherInfoByCityAsyncThunk } from "../features"
import { AppDispatch, RootState } from "../types"

const mapStateToProps = (state: RootState) => {
    return {
        historicalWeatherData: state.historicalWeatherInformation.data,
        historicalWeatherDataisError: state.historicalWeatherInformation.isError,
        historicalWeatherDataisLoading: state.historicalWeatherInformation.isLoading,
        currentWeatherData: state.weatherInformation.data,
        currentWeatherDataIsLoading: state.weatherInformation.isLoading,
        currentWeatherDataIsError: state.weatherInformation.isError

    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        getWeatherData: (city: string) => dispatch(getWeatherInfoByCityAsyncThunk(city)),
        getHistoricalWeatherData: (data: { lat: number, lon: number, dt: number }) => dispatch(getHistoricalWeatherInfoByCityAsyncThunk(data))
    }
}


export const WeatherAppContainer = connect(mapStateToProps, mapDispatchToProps)(WeatherApp)

