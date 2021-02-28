import React from 'react';
import Logo from '../Logo/Logo';
import Search from './Search/Search';
import PropTypes from 'prop-types';
import './MainHeader.scss';

const MainHeader = ({setSearchValue}) => {
  return (
    <div className="main-header">
      <div className="header container">
        <Logo />
        <div className="add-button">
          <button>+ Add Movie</button>
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
