import React, { useEffect } from "react";
import MoviesList from "../MoviesList/MoviesList";
import MoviesStatistic from "../MoviesStatistic/MoviesStatistic";
import Spinner from "../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/actions";
import { getFilteredMovies } from "../../utils/getFilteredMovies";
import { getSearchedMovies } from "../../utils/getSearchedMovies";
import { getSortedMovies } from "../../utils/getSortedMovies";
import { errorMoviesSelector, loadingMoviesSelector, moviesSelector } from "../../redux/selectors/moviesSelectors";
import { filterSelector } from "../../redux/selectors/filterSelectors";
import { seacrhSelector } from "../../redux/selectors/searchSelectors";
import { sortingSelector } from "../../redux/selectors/sortingSelectors";

const MoviesContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector(moviesSelector);
  const error = useSelector(errorMoviesSelector);
  const isLoading = useSelector(loadingMoviesSelector);

  const filter = useSelector(filterSelector);
  const searchValue = useSelector(seacrhSelector);
  const sorting = useSelector(sortingSelector);

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
