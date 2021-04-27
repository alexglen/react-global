import { newToOld } from '../constants';
import { APPLY_SORTING } from '../types';

const initialState = {
  sorting: newToOld,
};

export const sortingReducer = (state = initialState, { type, typeOfSorting }) => {
  switch (type) {
    case APPLY_SORTING:
      return { ...state, sorting: typeOfSorting };

    default:
      return state;
  }
};
