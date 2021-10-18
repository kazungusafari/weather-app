import { configureStore } from '@reduxjs/toolkit';
import {
    getHistoricalWeatherInfoByCityReducer,
    getWeatherInfoByCityReducer,
    getWeatherInfoByCitySlice,
    getHistoricalWeatherInfoByCitySlice,
    addSearchSlice,
    addSearchReducer,
    getSearchSlice,
    getSearchReducer
} from '../features'


export const store = configureStore({
    reducer: {
        [getWeatherInfoByCitySlice.name]: getWeatherInfoByCityReducer,
        [getHistoricalWeatherInfoByCitySlice.name]: getHistoricalWeatherInfoByCityReducer,
        [addSearchSlice.name]: addSearchReducer,
        [getSearchSlice.name]: getSearchReducer
    }
})


