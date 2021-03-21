import { fetchMovies, updateMovie, removeMovie, postMovie } from "../../actions";
import {
  ADD_NEW_MOVIE,
  APPLY_FILTER,
  APPLY_SEARCH,
  APPLY_SORTING,
  DELETE_MOVIE,
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

export const addNewMovie = (data) => {
  return async (dispatch) => {
    postMovie(data)
      .then((res) => res.json())
      .then(({ name: id }) => {
        dispatch({
          type: ADD_NEW_MOVIE,
          payload: { id, ...data },
        });
      });
  };
};

export const editMovie = (data, id) => {
  return async (dispatch) => {
    updateMovie(data, id)
      .then((res) => res.json())
      .then((data) => {
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

export const deleteMovie = (id) => {
  return async (dispatch) => {
    removeMovie(id).then(() => {
      dispatch({
        type: DELETE_MOVIE,
        payload: id,
      });
    });
  };
};

export const filteredMovies = (filter) => ({ type: APPLY_FILTER, filter });
export const sortMovies = (typeOfSorting) => ({ type: APPLY_SORTING, typeOfSorting });
export const searchMovies = (value) => ({ type: APPLY_SEARCH, value });
