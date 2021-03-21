import {
  ADD_NEW_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
} from "../constants";

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
      return { ...state, isLoading: false, error: "Error was found" };
    case ADD_NEW_MOVIE:
      return { ...state, movies: [...state.movies, payload] };
    case EDIT_MOVIE:
      const editedMovieIndex = state.movies.findIndex((movie) => movie.id === payload.id);
      const updatedMovieCard = { ...payload.data, id: payload.id };
      return {
        ...state,
        movies: [
          ...state.movies.slice(0, editedMovieIndex),
          updatedMovieCard,
          ...state.movies.slice(editedMovieIndex + 1),
        ],
      };
    case DELETE_MOVIE:
      return { ...state, movies: state.movies.filter(({ id }) => id !== payload) };

    default:
      return state;
  }
};
