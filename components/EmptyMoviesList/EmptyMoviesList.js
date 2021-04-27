import Button from '../UI-kit/Button/Button';
import styles from './EmptyMoviesList.module.scss';

const EmptyMoviesList = () => {
  // const { push } = useHistory();
  return (
    <div className={styles.empty}>
      <h2 className={styles.title}>No Movies Found</h2>
      <div className={styles.text}>
        <p>Unfortunately, your search returned no results...</p>
        <p>What to do? Try changing your request. Many films have multiple titles.</p>
      </div>
      <div className={styles.button}>
        <Button color='primary' onClick={() => push('/')}>
          Search again
        </Button>
      </div>
    </div>
  );
};

export default EmptyMoviesList;
