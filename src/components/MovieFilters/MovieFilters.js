import React from 'react';
import { getGenres } from '../../utils/getGenres';
import { mockedData } from '../../mockedData';
import PropTypes from 'prop-types';
import './MovieFilters.scss';

const MovieFilters = ({ setMovieFilter, movieFilter }) => {
  const filters = getGenres(mockedData);
  const movieFilters = [{ title: 'all' }, ...filters.map((filter) => ({ title: filter }))];

  return (
    <ul className='filters'>
      {movieFilters.map(({ title }) => (
        <li
          key={title}
          className={title === movieFilter ? 'active' : ''}
          onClick={() => setMovieFilter(title)}>
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
