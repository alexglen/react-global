import React from 'react';
import PropTypes from 'prop-types';
import {mockedData} from '../../mockedData';
import './MovieFilters.scss';

const MovieFilters = ({setMovieFilter, movieFilter}) => {
  const filters = [...new Set(mockedData
        .reduce((acc, current) => [...acc, current.genre.split(',')], [])
        .flat(Infinity)
        .map((el) => el.trim()))].map((elem) => ({title: elem}));

  return (
    <ul className="filters">
      {[{title: 'all'}, ...filters].map(({title}) => (
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
