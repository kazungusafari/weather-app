import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dB } from "../helpers";

type State = {
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean,
    errors: any,
    data: ''

}
const initialState: State = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errors: '',
    data: ''
}

export const getSearchAsyncThunk = createAsyncThunk<any>('searchHistory/get', async (_, thunkApi) => {
    try {
        let allSearches = await dB.getRecentSearches;
        return thunkApi.fulfillWithValue(allSearches)
    }
    catch (error: any) {
        return thunkApi.rejectWithValue('No search history found')
    }

})

export const getSearchSlice = createSlice({
    name: 'searchHistory',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSearchAsyncThunk.pending, (state, _action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.errors = ''
            state.data = ''
        })
        builder.addCase(getSearchAsyncThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true
            state.isError = false;
            state.errors = '';
            state.data = action.payload
        })
        builder.addCase(getSearchAsyncThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.errors = action.payload
            state.data = ''
        })
    }
})

export default getSearchSlice.reducer


