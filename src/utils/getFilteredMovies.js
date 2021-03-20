import { allMovies } from "../constants";

export const getFilteredMovies = (filter, movies) => {
  if (filter === allMovies) {
    return movies;
  } else {
    return movies.filter(({ genre }) => genre.includes(filter));
  }
};
