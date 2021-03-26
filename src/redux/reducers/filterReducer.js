import { allMovies } from "../../constants";
import { APPLY_FILTER } from "../constants";

const initialState = {
  filter: allMovies,
};

export const filterReducer = (state = initialState, { type, filter }) => {
  switch (type) {
    case APPLY_FILTER:
      return { ...state, filter };
    default:
      return state;
  }
};
