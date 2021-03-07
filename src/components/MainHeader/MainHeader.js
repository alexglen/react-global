import React, { useContext } from 'react';
import Logo from '../Logo/Logo';
import Search from './Search/Search';
import { StatusModalsContext } from '../../context/StatusModalsContext';
import PropTypes from 'prop-types';
import './MainHeader.scss';


const MainHeader = ({setSearchValue}) => {
  const {setIsCardModalOpen, setTypeOfEvent}  = useContext(StatusModalsContext)
  return (
    <div className="main-header">
      <div className="header container">
        <Logo />
        <div className="add-button">
          <button onClick={() => {
            setIsCardModalOpen(true);
            setTypeOfEvent('add');
          } }>+ Add Movie</button>
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
