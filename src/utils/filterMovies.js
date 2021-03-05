import { ALL } from "../constants";

export const filterMovies = (filter, movies) => {
    if (filter === ALL) {
     return movies;
   } else {
     return movies.filter(({genre}) => genre.includes(filter));
   }
 };
 