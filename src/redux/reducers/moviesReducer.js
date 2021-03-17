import { ADD_NEW_MOVIE, FETCH_DATA_START, FETCH_DATA_SUCCESS } from "../constants";

const initialState = {
  movies: [],
  isLoading: false,
};

export const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DATA_START:
      return { ...state, isLoading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, isLoading: false, movies: payload };
    case ADD_NEW_MOVIE:
      return { ...state, movies: [...state.movies, payload] };
    default:
      return state;
  }
};
