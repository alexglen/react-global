export const getSearchedMovies = (value, movies) =>
  movies.filter(({ title }) => title.toLowerCase().includes(value.toLowerCase()));
