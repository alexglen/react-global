import React, { useContext } from 'react';
import { StatusModalsContext } from '../../../../context/StatusModalsContext';
import { EDIT } from '../../../../constants';
import PropTypes from 'prop-types';
import './MenuModal.scss';

const MenuModal = ({ isMenuModalOpen, setIsMenuModalOpen, movieCardId }) => {
  const { setIsDeleteModalOpen, setIsCardModalOpen, setIdChosenCard, setTypeOfEvent } = useContext(
    StatusModalsContext
  );

  const editMovie = () => {
    setIsCardModalOpen(true);
    setIdChosenCard(movieCardId);
    setIsMenuModalOpen(false);
    setTypeOfEvent(EDIT);
  };

  const deleteMovie = () => {
    setIsDeleteModalOpen(true);
    setIdChosenCard(movieCardId);
    setIsMenuModalOpen(false);
  };

  const menu = isMenuModalOpen && (
    <div className='menu-modal'>
      <ul>
        <li onClick={editMovie}>Edit</li>
        <li onClick={deleteMovie}>Delete</li>
      </ul>
      <div className='close' onClick={() => setIsMenuModalOpen(false)} />
    </div>
  );

  return menu;
};

MenuModal.propTypes = {
  isMenuModalOpen: PropTypes.bool,
  setIsMenuModalOpen: PropTypes.func,
  movieCardId: PropTypes.string,
};

export default MenuModal;
