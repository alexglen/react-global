import { allMovies } from '../constants';

export const filterMovies = (filter, movies) => {
  if (filter === allMovies) {
    return movies;
  } else {
    return movies.filter(({ genre }) => genre.includes(filter));
  }
};
