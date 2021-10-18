import { connect } from "react-redux"
import { SearchHistory } from "../components"
import { getSearchAsyncThunk } from "../features"
import { AppDispatch, RootState } from "../types"

const mapStateToProps = (state: RootState) => {
    return {
        recentSearches: state.searchHistory.data
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        getRecentSearches: () => dispatch(getSearchAsyncThunk())
    }
}


export const SearchHistoryContainer = connect(mapStateToProps, mapDispatchToProps)(SearchHistory)