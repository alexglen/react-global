export const searchMovies = (value, movies) =>
  movies.filter(({ title }) => title.toLowerCase().includes(value.toLowerCase()));
