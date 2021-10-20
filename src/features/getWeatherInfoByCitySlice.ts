import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addSearchAsyncThunk } from ".";
import { get } from "../api/get";
import { getHistoricalWeatherInfoByCityAsyncThunk } from "./getHistoricaWeatherInfoByCity";
import * as Helpers from '../helpers'

const { getWeatherData } = Helpers;

type State = {
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean,
    errors: any,
    data: any
}

const initialState: State = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errors: '',
    data: ''
}

export const getWeatherInfoByCityAsyncThunk = createAsyncThunk<any, string>('weatherInfo/get', async (city: string, { fulfillWithValue, dispatch, rejectWithValue }) => {
    try {
        const response: any = await get('https://community-open-weather-map.p.rapidapi.com/weather', { q: city });
        dispatch(addSearchAsyncThunk(city))
        dispatch(getHistoricalWeatherInfoByCityAsyncThunk({ dt: response.data.dt, lat: response.data.coord.lat, lon: response.data.coord.lon }))
        return fulfillWithValue(response.data);
    }
    catch (error: any) {
        return rejectWithValue(error.message)
    }

})

export const getWeatherInfoByCitySlice = createSlice({
    name: 'weatherInformation',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getWeatherInfoByCityAsyncThunk.pending, (state, _action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.errors = ''
            state.data = ''
        })
        builder.addCase(getWeatherInfoByCityAsyncThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.errors = ''
            state.data = getWeatherData(action.payload)
        })
        builder.addCase(getWeatherInfoByCityAsyncThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.errors = action.payload
            state.data = ''
        })


    }
})

export default getWeatherInfoByCitySlice.reducer


