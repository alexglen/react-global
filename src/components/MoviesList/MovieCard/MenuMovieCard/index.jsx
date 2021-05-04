import React from "react";
import { useDispatch } from "react-redux";
import { openCardModal, openDeleteModal, setCurrentCardId, setTypeEvent } from "../../../../redux/actions";
import { typeEdit } from "../../../../constants";
import PropTypes from "prop-types";
import "./MenuMovieCard.scss";

function MenuMovieCard({ isMenuModalOpen, setIsMenuModalOpen, movieCardId }) {
  const dispatch = useDispatch();

  const editMovie = () => {
    dispatch(openCardModal());
    dispatch(setCurrentCardId(movieCardId));
    setIsMenuModalOpen(false);
    dispatch(setTypeEvent(typeEdit));
  };

  const deleteMovie = () => {
    dispatch(openDeleteModal());
    dispatch(setCurrentCardId(movieCardId));
    setIsMenuModalOpen(false);
  };

  const close = () => {
    setIsMenuModalOpen(false);
    dispatch(setCurrentCardId(movieCardId));
  };

  const menu = isMenuModalOpen && (
    <div className="menu-modal">
      <ul>
        <li onClick={editMovie}>Edit</li>
        <li onClick={deleteMovie}>Delete</li>
      </ul>
      <div className="close" onClick={close} />
    </div>
  );

  return menu;
}

MenuMovieCard.propTypes = {
  isMenuModalOpen: PropTypes.bool,
  setIsMenuModalOpen: PropTypes.func,
  movieCardId: PropTypes.string,
};

export default MenuMovieCard;
