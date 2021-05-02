import MoviesList from '../MoviesList/MoviesList';
import MoviesStatistic from '../MoviesStatistic/MoviesStatistic';
import Spinner from '../Spinner/Spinner';
import { useSelector } from 'react-redux';
import { getFilteredMovies } from '../../utils/getFilteredMovies';
import { getSortedMovies } from '../../utils/getSortedMovies';

import { filterSelector } from '../../selectors/filterSelectors';
import { sortingSelector } from '../../selectors/sortingSelectors';
import {
  errorMoviesSelector,
  loadingMoviesSelector,
  moviesSelector,
} from '../../selectors/moviesSelectors';

const MoviesContainer = () => {
  const movies = useSelector(moviesSelector);
  const error = useSelector(errorMoviesSelector);
  const isLoading = useSelector(loadingMoviesSelector);

  const filter = useSelector(filterSelector);
  const sorting = useSelector(sortingSelector);

  const moviesAfterFilter = getFilteredMovies(filter, movies);
  const moviesAfterSorting = getSortedMovies(sorting, moviesAfterFilter);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h2 className='error'>{error}</h2>;
  }
  return (
    <>
      <MoviesStatistic moviesNumber={moviesAfterSorting.length} />
      <MoviesList movies={moviesAfterSorting} />
    </>
  );
};
export default MoviesContainer;
