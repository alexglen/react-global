import PropTypes from 'prop-types';
import styles from './MoviesStatistic.module.scss';

const MoviesStatistic = ({ moviesNumber }) => {
  return (
    <div className={styles.statistic}>
      <p>
        <span>{moviesNumber}</span> movies found
      </p>
    </div>
  );
};

MoviesStatistic.propTypes = {
  moviesNumber: PropTypes.number,
};

export default MoviesStatistic;
