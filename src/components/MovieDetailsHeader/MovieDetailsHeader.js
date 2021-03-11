import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import search from './search-icon.png';
import './MovieDetailsHeader.scss';

const MovieDetailsHeader = () => {
  return (
    <div className='movie-header container'>
      <NavLink to='/'>
        <Logo />
      </NavLink>
      <NavLink to='/'>
        <img src={search} alt='search-icon' />
      </NavLink>
    </div>
  );
};

export default MovieDetailsHeader;
