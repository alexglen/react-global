import { createSelector } from "reselect";

const getSearchValue = (state) => state.search;

export const seacrhSelector = createSelector(getSearchValue, (search) => search.searchValue);
