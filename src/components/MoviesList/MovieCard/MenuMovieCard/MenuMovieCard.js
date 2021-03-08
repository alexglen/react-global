import React, { useContext } from 'react';
import { StatusModalsContext } from '../../../../context/StatusModalsContext';
import { typeEdit } from '../../../../constants';
import PropTypes from 'prop-types';
import './MenuMovieCard.scss';

const MenuMovieCard = ({ isMenuModalOpen, setIsMenuModalOpen, movieCardId }) => {
  const { setIsDeleteModalOpen, setIsCardModalOpen, setIdChosenCard, setTypeOfEvent } = useContext(
    StatusModalsContext
  );

  const editMovie = () => {
    setIsCardModalOpen(true);
    setIdChosenCard(movieCardId);
    setIsMenuModalOpen(false);
    setTypeOfEvent(typeEdit);
  };

  const deleteMovie = () => {
    setIsDeleteModalOpen(true);
    setIdChosenCard(movieCardId);
    setIsMenuModalOpen(false);
  };

  const close = () => {
    setIsMenuModalOpen(false);
    setIdChosenCard(movieCardId);
  }

  const menu = isMenuModalOpen && (
    <div className='menu-modal'>
      <ul>
        <li onClick={editMovie}>Edit</li>
        <li onClick={deleteMovie}>Delete</li>
      </ul>
      <div className='close' onClick={close} />
    </div>
  );

  return menu;
};

MenuMovieCard.propTypes = {
  isMenuModalOpen: PropTypes.bool,
  setIsMenuModalOpen: PropTypes.func,
  movieCardId: PropTypes.string,
};

export default MenuMovieCard;
