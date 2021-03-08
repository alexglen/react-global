import React, { useContext } from 'react';
import Logo from '../Logo/Logo';
import Search from './Search/Search';
import { StatusModalsContext } from '../../context/StatusModalsContext';
import { ADD } from './../../constants';
import PropTypes from 'prop-types';
import './MainHeader.scss';

const MainHeader = ({ setSearchValue }) => {
  const { setIsCardModalOpen, setTypeOfEvent } = useContext(StatusModalsContext);

  const openAddMovieModal = () => {
    setIsCardModalOpen(true);
    setTypeOfEvent(ADD);
  };

  return (
    <div className='main-header'>
      <div className='header container'>
        <Logo />
        <div className='add-button'>
          <button onClick={openAddMovieModal}>+ Add Movie</button>
        </div>
      </div>
      <Search setSearchValue={setSearchValue} />
    </div>
  );
};

Search.propTypes = {
  setSearchValue: PropTypes.func,
};

export default MainHeader;
