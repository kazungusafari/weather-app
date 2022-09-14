import React from "react";

import { withSearchHistory } from "../hoc";

import { Search } from "../types";

export const SearchHistoryW = ({
  searchHistory,
}: {
  searchHistory: Search[];
}) => {
  return (
    <main>
      <div style={{ color: "black" }}>
        {searchHistory && searchHistory.length > 0
          ? searchHistory.map((value: Search) => {
              return (
                <p key={value.id}>
                  City : &nbsp;
                  {value.city}
                </p>
              );
            })
          : `No search history found`}
      </div>
    </main>
  );
};

export const SearchHistory = withSearchHistory(SearchHistoryW);

/*
 */
