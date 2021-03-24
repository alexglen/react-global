import React from "react";
import { getGenres } from "../../utils/getGenres";
import { useDispatch, useSelector } from "react-redux";
import { filteredMovies } from "../../redux/actions";
import "./MovieFilters.scss";

const MovieFilters = () => {
  const { movies } = useSelector(({ movies }) => movies);
  const { filter } = useSelector(({ filters }) => filters);
  const dispatch = useDispatch();

  const movieFilters = [{ title: "all" }, ...getGenres(movies).map((filter) => ({ title: filter }))];

  return (
    <ul className="filters">
      {movieFilters.map(({ title }) => (
        <li key={title} className={title === filter ? "active" : ""} onClick={() => dispatch(filteredMovies(title))}>
          {title}
        </li>
      ))}
    </ul>
  );
};

export default MovieFilters;
