import React from 'react';
import MainHeader from '../components/MainHeader/MainHeader';
import PropTypes from 'prop-types';

const HomePage = ({ setSearchValue }) => {
  return (
    <header className='header-content'>
      <MainHeader setSearchValue={setSearchValue} />
    </header>
  );
};

HomePage.propTypes = {
  setSearchValue: PropTypes.func,
};

export default HomePage;
