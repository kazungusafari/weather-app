import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../api/get";


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




export const getHistoricalWeatherInfoByCityAsyncThunk = createAsyncThunk<any, { lat: number, lon: number, dt: number }>('historicalWeatherInfo/get', async (location: { dt: number, lat: number, lon: number }, thunkApi) => {
    try {
        const response = await get('https://community-open-weather-map.p.rapidapi.com/onecall/timemachine', location);
        return thunkApi.fulfillWithValue(response.data)

    }
    catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
    }

})

export const getHistoricalWeatherInfoByCitySlice = createSlice({
    name: 'historicalWeatherInformation',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHistoricalWeatherInfoByCityAsyncThunk.pending, (state, _action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.errors = ''
            state.data = ''
        })
        builder.addCase(getHistoricalWeatherInfoByCityAsyncThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.errors = ''
            state.data = action.payload
        })
        builder.addCase(getHistoricalWeatherInfoByCityAsyncThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.errors = action.payload
            state.data = ''
        })
    }
})

export default getHistoricalWeatherInfoByCitySlice.reducer









