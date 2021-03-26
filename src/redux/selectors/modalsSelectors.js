import { createSelector } from "reselect";

const getModalState = (state) => state.modals;

const getState = (state) => state;

export const currentCardIdSelector = createSelector(getModalState, (modals) => modals.currentCardId);
export const typeEventSelector = createSelector(getModalState, (modals) => modals.typeEvent);
export const deleteModalOpenSelector = createSelector(getModalState, (modals) => modals.isDeleteModalOpen);
export const cardModalOpenSelector = createSelector(getModalState, (modals) => modals.isCardModalOpen);

export const activeCardSelector = createSelector(getState, ({ movies: { movies }, modals }) =>
  movies.find((movie) => movie.id === modals.currentCardId)
);
