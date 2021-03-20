import { APPLY_SEARCH } from "../constants";

const initialState = {
  searchValue: "",
};

export const searchReducer = (state = initialState, { type, value }) => {
  switch (type) {
    case APPLY_SEARCH:
      return { ...state, searchValue: value };

    default:
      return state;
  }
};
