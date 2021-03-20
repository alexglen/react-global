import { fetchMovies, putMovie } from "../../actions";
import {
  ADD_NEW_MOVIE,
  APPLY_FILTER,
  APPLY_SEARCH,
  APPLY_SORTING,
  EDIT_MOVIE,
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
} from "../constants";

export const getMovies = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_DATA_START,
    });

    fetchMovies()
      .then((body) => {
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: Object.keys(body).map((id) => ({ id, ...body[id] })),
        });
      })

      .catch((e) => {
        dispatch({
          type: FETCH_DATA_ERROR,
          payload: e,
        });
      });
  };
};

export const editMovie = (data, id) => {
  return async (dispatch) => {
    putMovie(data, id).then(() => {
      dispatch({
        type: EDIT_MOVIE,
        payload: {
          data,
          id,
        },
      });
    });
  };
};

export const addNewMovie = (payload) => ({ type: ADD_NEW_MOVIE, payload });

export const filteredMovies = (filter) => ({ type: APPLY_FILTER, filter });
export const sortMovies = (typeOfSorting) => ({ type: APPLY_SORTING, typeOfSorting });
export const searchMovies = (value) => ({ type: APPLY_SEARCH, value });
