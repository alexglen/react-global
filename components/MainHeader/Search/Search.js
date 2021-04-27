import { useCallback, useState } from 'react';
import Button from '../../UI-kit/Button/Button';
import { useDispatch } from 'react-redux';
import { lookMovies } from '../../../actions';
import styles from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  // const { push } = useHistory();

  const handleForm = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(lookMovies(value));

      // push(`/search?Search=${value}`);
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
