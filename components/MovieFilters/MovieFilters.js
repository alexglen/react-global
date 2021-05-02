import { getGenres } from '../../utils/getGenres';
import { useDispatch, useSelector } from 'react-redux';
import { moviesSelector } from '../../selectors/moviesSelectors';
import { filterSelector } from '../../selectors/filterSelectors';
import { filteredMovies } from '../../actions';
import styles from './MovieFilters.module.scss';

const MovieFilters = () => {
  const movies = useSelector(moviesSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const movieFilters = [
    { title: 'all' },
    ...getGenres(movies).map((filter) => ({ title: filter })),
  ];

  return (
    <ul className={styles.filters}>
      {movieFilters.map(({ title }) => (
        <li
          key={title}
          className={title === filter ? 'active' : ''}
          onClick={() => dispatch(filteredMovies(title))}>
          {title}
        </li>
      ))}
    </ul>
  );
};

export default MovieFilters;
