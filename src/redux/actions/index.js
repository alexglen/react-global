import { ADD_NEW_MOVIE, FETCH_DATA_ERROR, FETCH_DATA_START, FETCH_DATA_SUCCESS } from "../constants";

export const getMovies = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_DATA_START,
    });

    fetch("https://netflix-fbbe6-default-rtdb.firebaseio.com/movies.json")
      .then((res) => res.json())
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

export const addNewMovie = (payload) => ({ type: ADD_NEW_MOVIE, payload });
