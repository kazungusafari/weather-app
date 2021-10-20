import { connect } from "react-redux"

//Components
import { WeatherApp } from "../components"

//AppThunks
import { getWeatherInfoByCityAsyncThunk, getHistoricalWeatherInfoByCityAsyncThunk } from "../features"

//Types
import { AppDispatch, HistoricalWeatherInformationInputs, RootState } from "../types"


//Selectors
import * as Selectors from '../selectors'

const { getWeather, getHistoricalWeather } = Selectors

const mapStateToProps = (state: RootState) => {
    return {
        ...getWeather(state),
        ...getHistoricalWeather(state)
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        getWeatherData: (city: string) => dispatch(getWeatherInfoByCityAsyncThunk(city)),
        getHistoricalWeatherData: (data: HistoricalWeatherInformationInputs) => dispatch(getHistoricalWeatherInfoByCityAsyncThunk(data))
    }
}

export const WeatherAppContainer = connect(mapStateToProps, mapDispatchToProps)(WeatherApp)

