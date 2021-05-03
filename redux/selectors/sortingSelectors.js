import { createSelector } from 'reselect';

const getCurrentSorting = (state) => state.sorting;

export const sortingSelector = createSelector(getCurrentSorting, ({ sorting }) => sorting);
