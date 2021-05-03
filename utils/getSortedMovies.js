import { decRating, incRating, newToOld, oldToNew } from "../constants";

const sortByReleaseDate = (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate);

const sortByRating = (a, b) => Number(a.rating) - Number(b.rating);

export const getSortedMovies = (type, movies) => {
  switch (type) {
    case oldToNew:
      return [...movies.sort(sortByReleaseDate)];
    case newToOld:
      return [...movies.sort(sortByReleaseDate)].reverse();
    case decRating:
      return [...movies.sort(sortByRating)];
    case incRating:
      return [...movies.sort(sortByRating).reverse()];
    default:
      return [...movies.sort(sortByReleaseDate)].reverse();
  }
};
