export const searchMovies = (value, movies) => movies.filter((movie) => movie.title.toLowerCase().includes(value.toLowerCase()));

export const filterMovies = (filter, movies) => {
  if (filter === 'all') {
    return movies;
  } else {
    return movies.filter(({genre}) => genre.includes(filter));
  }
};

export const sortMovies = (type, movies) => {
  switch (type) {
    case 'oldToNew':
      return [...movies.sort((a, b) => a.releaseDate - b.releaseDate)];
    case 'newToOld':
      return [...movies.sort((a, b) => b.releaseDate - a.releaseDate)];
    case 'aToZ':
      return [...movies.sort((a, b) => (b.title < a.title ? 1 : -1))];
    case 'zToA':
      return [...movies.sort((a, b) => (b.title > a.title ? 1 : -1))];
    default:
      return [...movies.sort((a, b) => b.releaseDate - a.releaseDate)];
  }
};

export const typeOfSorting = {
  oldToNew: 'Release date: from old',
  newToOld: 'Release date: from new',
  aToZ: 'A to Z',
  zToA: 'Z to A',
};
