import React, { useEffect } from "react";
import MoviesList from "../MoviesList/MoviesList";
import MoviesStatistic from "../MoviesStatistic/MoviesStatistic";
import Spinner from "../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/actions";
import { getFilteredMovies } from "../../utils/getFilteredMovies";
import { getSearchedMovies } from "../../utils/getSearchedMovies";
import { getSortedMovies } from "../../utils/getSortedMovies";

const MoviesContainer = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, error } = useSelector(({ movies }) => movies);
  const { filter } = useSelector(({ filters }) => filters);
  const { searchValue } = useSelector(({ search }) => search);
  const { sorting } = useSelector(({ sorting }) => sorting);

  const moviesAfterFilter = getFilteredMovies(filter, movies);
  const moviesAfterSearch = getSearchedMovies(searchValue, moviesAfterFilter);
  const moviesAfterSorting = getSortedMovies(sorting, moviesAfterSearch);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h2 className="error">{error}</h2>;
  }
  return (
    <>
      <MoviesStatistic moviesNumber={moviesAfterSorting.length} />
      <MoviesList movies={moviesAfterSorting} />
    </>
  );
};
export default MoviesContainer;
