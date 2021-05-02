import { createSelector } from 'reselect';

const getMovies = (state) => state.movies;

export const moviesSelector = createSelector(getMovies, ({ movies }) => movies);
export const errorMoviesSelector = createSelector(getMovies, (movies) => movies.error);
export const loadingMoviesSelector = createSelector(getMovies, (movies) => movies.isLoading);
