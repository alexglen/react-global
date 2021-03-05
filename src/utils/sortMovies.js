import { aToZ, newToOld, oldToNew, zToA } from "../constants";

const sortByReleaseDate = (a, b) => a.releaseDate - b.releaseDate;

const sortByTitle = (a, b) => a.title.localeCompare(b.title);

export const sortMovies = (type, movies) => {
  switch (type) {
    case oldToNew:
      return [...movies.sort(sortByReleaseDate)];
    case newToOld:
      return [...movies.sort(sortByReleaseDate)].reverse();
    case aToZ:
      return [...movies.sort(sortByTitle)];
    case zToA:
      return [...movies.sort(sortByTitle).reverse()];
    default:
      return [...movies.sort(sortByReleaseDate)].reverse();
  }
};