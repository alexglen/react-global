import {
  CLOSE_CARD_MODAL,
  CLOSE_DELETE_MODAL,
  OPEN_CARD_MODAL,
  OPEN_DELETE_MODAL,
  SET_CURRENT_CARD_ID,
  SET_TYPE_EVENT,
} from "../constants";

const initialState = {
  isDeleteModalOpen: false,
  isCardModalOpen: false,
  currentCardId: null,
  typeEvent: null,
};

export const modalsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_DELETE_MODAL:
      return { ...state, isDeleteModalOpen: true };
    case CLOSE_DELETE_MODAL:
      return { ...state, isDeleteModalOpen: false };
    case OPEN_CARD_MODAL:
      return { ...state, isCardModalOpen: true };
    case CLOSE_CARD_MODAL:
      return { ...state, isCardModalOpen: false };
    case SET_CURRENT_CARD_ID:
      return { ...state, currentCardId: payload };
    case SET_TYPE_EVENT:
      return { ...state, typeEvent: payload };
    default:
      return state;
  }
};
