import { connect } from "react-redux"
import { SearchHistory } from "../components"
import { getSearchAsyncThunk } from "../features"
import { AppDispatch, RootState } from "../types"
import * as Selectors from '../selectors'

const { getSearchHistory } = Selectors

const mapStateToProps = (state: RootState) => {
    return getSearchHistory(state)
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        getRecentSearches: () => dispatch(getSearchAsyncThunk())
    }
}


export const SearchHistoryContainer = connect(mapStateToProps, mapDispatchToProps)(SearchHistory)