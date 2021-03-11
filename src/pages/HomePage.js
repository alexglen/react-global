import React from 'react';
import MainHeader from '../components/MainHeader/MainHeader';

const HomePage = ({setSearchValue}) => {
    return (
        <header className='header-content'>
        <MainHeader setSearchValue={setSearchValue} />
      </header>
    )
}

export default HomePage
