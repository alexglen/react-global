import MovieCard from './MovieCard/MovieCard';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.scss';

const MoviesList = ({ movies }) => {
  return (
    <>
      {movies.length ? (
        <div className={styles.list}>
          {movies.map((movie) => (
            <MovieCard {...movie} key={movie.id} />
          ))}
        </div>
      ) : null}
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string,
      releaseDate: PropTypes.string,
      genre: PropTypes.string,
      id: PropTypes.string,
      duration: PropTypes.string,
      rating: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default MoviesList;
