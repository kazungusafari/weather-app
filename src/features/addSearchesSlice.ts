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

export const addSearchAsyncThunk = createAsyncThunk<any, string>('searchHistory/add', async (city: string, thunkApi) => {
    try {
        dB.addSearch({ city })
        return thunkApi.fulfillWithValue('Added successfully')
    }
    catch (error: any) {
        return thunkApi.rejectWithValue('Could add city to the search history')
    }

})

export const addSearchSlice = createSlice({
    name: 'addedSearchHistory',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addSearchAsyncThunk.pending, (state, _action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.errors = ''
            state.data = ''
        })
        builder.addCase(addSearchAsyncThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true
            state.isError = false;
            state.errors = '';
            state.data = action.payload
        })
        builder.addCase(addSearchAsyncThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.errors = action.payload
            state.data = ''
        })
    }
})

export default addSearchSlice.reducer


