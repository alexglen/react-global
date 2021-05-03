import { useCallback, useState } from 'react';
import Button from '../../UI-kit/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { lookMovies } from '../../../redux/actions';
import { useRouter } from 'next/dist/client/router';
import styles from './Search.module.scss';
import { foundMoviesSelector } from '../../../redux/selectors/moviesSelectors';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const { push } = useRouter();

  const movies = useSelector(foundMoviesSelector(value));

  const handleForm = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(lookMovies(value));
      if (!movies.length) {
        push('/empty');
      } else {
        push(`/search?Search=${value}`);
      }
    },
    [value, dispatch]
  );

  const handleChange = useCallback(({ target: { value } }) => {
    setValue(value);
  }, []);

  return (
    <div className={styles.search}>
      <h1 className={styles.title}>Find your movie</h1>
      <form onSubmit={handleForm}>
        <input
          type='text'
          placeholder='What do you want to watch?'
          value={value}
          onChange={handleChange}
        />
        <Button color='primary'>search</Button>
      </form>
    </div>
  );
};

export default Search;
