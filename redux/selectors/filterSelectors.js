import { createSelector } from 'reselect';

const getCurrentFilter = (state) => state.filters;

export const filterSelector = createSelector(getCurrentFilter, (filters) => filters.filter);
