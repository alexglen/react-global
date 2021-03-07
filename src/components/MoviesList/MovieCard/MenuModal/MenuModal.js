import React, { useContext } from "react";
import { StatusModalsContext } from "../../../../context/StatusModalsContext";
import PropTypes from "prop-types";
import "./MenuModal.scss";

const MenuModal = ({ isMenuModalOpen, setIsMenuModalOpen, movieCardId }) => {
  const {
    setIsDeleteModalOpen,
    setIsCardModalOpen,
    setIdChosenCard,
    setTypeOfEvent
  } = useContext(StatusModalsContext);

  const menu = isMenuModalOpen && (
    <div className="menu-modal">
      <ul>
        <li onClick={() => {
            setIsCardModalOpen(true);
            setIdChosenCard(movieCardId);
            setIsMenuModalOpen(false);
            setTypeOfEvent('edit');
          }}>Edit</li>
        <li
          onClick={() => {
            setIsDeleteModalOpen(true);
            setIdChosenCard(movieCardId);
            setIsMenuModalOpen(false);
          }}
        >
          Delete
        </li>
      </ul>
      <div className="close" onClick={() => setIsMenuModalOpen(false)} />
    </div>
  );

  return menu;
};

MenuModal.propTypes = {
  isMenuModalOpen: PropTypes.bool,
  setIsMenuModalOpen: PropTypes.func,
  movieCardId: PropTypes.string
};
  

export default MenuModal;
