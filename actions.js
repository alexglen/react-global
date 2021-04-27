import { fetchMovies, updateMovie, removeMovie, postMovie, searchMovies } from './fetch';
import {
  ADD_NEW_MOVIE,
  APPLY_FILTER,
  APPLY_SORTING,
  CLOSE_CARD_MODAL,
  CLOSE_DELETE_MODAL,
  DELETE_MOVIE,
  EDIT_MOVIE,
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  OPEN_CARD_MODAL,
  OPEN_DELETE_MODAL,
  SET_CURRENT_CARD_ID,
  SET_TYPE_EVENT,
} from './types';

export const getMovies = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_DATA_START,
    });
    fetchMovies()
      .then((body) => {
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: body,
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

export const lookMovies = (search) => {
  return async (dispatch) => {
    searchMovies(search)
      .then((body) => {
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: body,
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

export const openDeleteModal = () => ({ type: OPEN_DELETE_MODAL });
export const closeDeleteModal = () => ({ type: CLOSE_DELETE_MODAL });
export const openCardModal = () => ({ type: OPEN_CARD_MODAL });
export const closeCardModal = () => ({ type: CLOSE_CARD_MODAL });

export const setCurrentCardId = (id) => ({ type: SET_CURRENT_CARD_ID, payload: id });
export const setTypeEvent = (id) => ({ type: SET_TYPE_EVENT, payload: id });
