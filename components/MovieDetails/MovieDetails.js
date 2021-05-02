import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { resetedState } from '../../constants';
import { moviesSelector } from '../../selectors/moviesSelectors';

import styles from './MovieDetails.module.scss';

const MovieDetails = ({ id }) => {
  const [detailsMovie, setDetailsMovie] = useState(resetedState);
  const movies = useSelector(moviesSelector);

  useEffect(() => {
    const movie = movies.find((movie) => movie.id === id);
    if (movie) {
      setDetailsMovie({ ...movie });
    }
  }, [movies, id]);

  return (
    <article className={styles.container}>
      <div className={styles.details}>
        <div className={styles.picture}>
          <img src={detailsMovie.img} alt={detailsMovie.title} />
        </div>
        <div className={styles.info}>
          <div className={styles.titles}>
            <p className={styles.title}>{detailsMovie.title}</p>
            <p className={styles.rating}>{detailsMovie.rating}</p>
          </div>

          <div className={styles.extra}>
            <div className={styles.duration}>
              <p className={styles.year}>{detailsMovie.releaseDate}</p>
              <p className={styles.duration}>{detailsMovie.duration} min</p>
            </div>
            <p className={styles.description}>{detailsMovie.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MovieDetails;
