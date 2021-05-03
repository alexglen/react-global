import {
  ADD_NEW_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
} from '../types';

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

export const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DATA_START:
      return { ...state, isLoading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, isLoading: false, movies: payload };
    case FETCH_DATA_ERROR:
      return { ...state, isLoading: false, error: 'Something was wrong. Try to update your page' };
    case ADD_NEW_MOVIE:
      return { ...state, movies: [...state.movies, payload] };
    case EDIT_MOVIE:
      const editedMovieIndex = state.movies.findIndex((movie) => movie.id === payload.id);
      const newMovies = [...state.movies];
      newMovies[editedMovieIndex] = payload.data;
      return { ...state, movies: newMovies };
    case DELETE_MOVIE:
      return { ...state, movies: state.movies.filter(({ id }) => id !== payload) };

    default:
      return state;
  }
};
