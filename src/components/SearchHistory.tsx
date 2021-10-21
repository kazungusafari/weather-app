import { withSearchHistory } from "../hoc";
import { Search } from "../types";

export const SearchHistoryW = ({
  searchHistory,
}: {
  searchHistory: Search[];
}) => {
  return (
    <main>
      <div>
        {searchHistory &&
          searchHistory.map((value: Search) => {
            return (
              <p key={value.id}>
                City : &nbsp;
                {value.city}
              </p>
            );
          })}
      </div>
    </main>
  );
};

export const SearchHistory = withSearchHistory(SearchHistoryW);
