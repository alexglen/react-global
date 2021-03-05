import React from 'react';
import PropTypes from 'prop-types';
import {mockedData} from '../../mockedData';
import './MovieFilters.scss';

const MovieFilters = ({setMovieFilter, movieFilter}) => {
  const splitData = data => data.reduce((acc, current) => [...acc, ...current.genre.split(', ')], []);

  const filters = [...new Set(splitData(mockedData).flat(Infinity).map(el => el.trim()))];
  
  const movieFilters = [{title: 'all'}, ...filters.map(filter => ({title: filter}))]

  return (
    <ul className="filters">
      {movieFilters.map(({title}) => (
        <li key={title} className={title === movieFilter ? 'active' : ''} onClick={() => setMovieFilter(title)}>
          {title}
        </li>
      ))}
    </ul>
  );
};

MovieFilters.propTypes = {
  movieFilter: PropTypes.string,
  setMovieFilter: PropTypes.func,
};

export default MovieFilters;
